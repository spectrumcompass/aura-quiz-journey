import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, UserPlus, AlertCircle, Search } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface UserWithRole {
  id: string;
  email: string;
  display_name?: string;
  role?: 'admin' | 'moderator' | 'user';
}

export const AdminUserManagement = () => {
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchEmail, setSearchEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // Get all profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('user_id, display_name');

      if (profilesError) throw profilesError;

      // Get all user roles
      const { data: roles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');

      if (rolesError) throw rolesError;

      // Create maps
      const profilesMap = new Map(profiles?.map(p => [p.user_id, p]) || []);
      const rolesMap = new Map(roles?.map(r => [r.user_id, r.role]) || []);

      // For now, we'll show users who have profiles (have used the system)
      const usersData = (profiles || []).map(profile => ({
        id: profile.user_id,
        email: `user_${profile.user_id.slice(0, 8)}`, // We can't get actual email from client
        display_name: profile.display_name,
        role: rolesMap.get(profile.user_id) as 'admin' | 'moderator' | 'user' | undefined
      }));

      setUsers(usersData);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Erro ao carregar usuários.');
    } finally {
      setLoading(false);
    }
  };

  const assignRole = async (userId: string, role: 'admin' | 'moderator' | 'user') => {
    try {
      // First try to update existing role
      const { data: existing } = await supabase
        .from('user_roles')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (existing) {
        const { error } = await supabase
          .from('user_roles')
          .update({ role })
          .eq('user_id', userId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('user_roles')
          .insert({ user_id: userId, role });

        if (error) throw error;
      }

      // Update local state
      setUsers(users.map(user => 
        user.id === userId ? { ...user, role } : user
      ));

      toast({
        title: "Permissão atualizada",
        description: `Usuário agora tem permissão de ${role}.`
      });
    } catch (err) {
      console.error('Error assigning role:', err);
      toast({
        variant: "destructive",
        title: "Erro ao atualizar permissão",
        description: "Não foi possível atualizar a permissão do usuário."
      });
    }
  };

  const promoteToAdmin = async (email: string) => {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email obrigatório",
        description: "Por favor, insira um email válido."
      });
      return;
    }

    // This is a simplified version - in production, you'd want to search users by email
    // For now, we'll show a message that the user needs to sign up first
    toast({
      title: "Instruções para promoção",
      description: "O usuário deve primeiro se cadastrar no sistema. Após isso, você poderá promovê-lo na lista abaixo."
    });
  };

  const filteredUsers = users.filter(user => 
    user.display_name?.toLowerCase().includes(searchEmail.toLowerCase()) ||
    user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Gerenciamento de Usuários
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Email do novo admin..."
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              className="flex-1"
            />
            <Button onClick={() => promoteToAdmin(searchEmail)} variant="outline">
              <UserPlus className="h-4 w-4 mr-2" />
              Instruções
            </Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Usuários do Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Carregando usuários...</p>
          ) : filteredUsers.length === 0 ? (
            <p className="text-muted-foreground">Nenhum usuário encontrado.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>ID do Usuário</TableHead>
                  <TableHead>Permissão Atual</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      {user.display_name || 'Usuário Anônimo'}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {user.id.slice(0, 8)}...
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                        {user.role || 'user'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {user.role !== 'admin' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => assignRole(user.id, 'admin')}
                          >
                            Tornar Admin
                          </Button>
                        )}
                        {user.role === 'admin' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => assignRole(user.id, 'user')}
                          >
                            Remover Admin
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};