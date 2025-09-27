import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LogIn, LogOut, User, BarChart3, Shield } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUserRole } from '@/hooks/useUserRole';
import { promoteCurrentUserToAdmin } from '@/lib/admin-setup';
import { useToast } from '@/hooks/use-toast';
const AuthButton = () => {
  const {
    user,
    signOut,
    loading
  } = useAuth();
  const { isAdmin } = useUserRole();
  const { toast } = useToast();

  const handlePromoteToAdmin = async () => {
    const result = await promoteCurrentUserToAdmin();
    toast({
      title: result.success ? "Sucesso!" : "Erro",
      description: result.message,
      variant: result.success ? "default" : "destructive"
    });
    
    if (result.success) {
      // Refresh the page to update the role
      window.location.reload();
    }
  };
  if (loading) {
    return <Button variant="soft" size="sm" disabled>
        <User className="h-4 w-4 mr-2" />
        Carregando...
      </Button>;
  }
  if (!user) {
    return <Button asChild variant="soft" size="sm">
        <Link to="/auth">
          <LogIn className="h-4 w-4 mr-2" />
          Entrar
        </Link>
      </Button>;
  }
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="soft" size="sm">
          <User className="h-4 w-4 mr-2" />
          {user.user_metadata?.display_name || user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem disabled>
          <User className="h-4 w-4 mr-2" />
          {user.email}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/dashboard" className="flex items-center">
            <BarChart3 className="h-4 w-4 mr-2" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        {!isAdmin && (
          <DropdownMenuItem onClick={handlePromoteToAdmin}>
            <Shield className="h-4 w-4 mr-2" />
            Tornar-se Admin (Teste)
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={signOut} className="text-destructive">
          <LogOut className="h-4 w-4 mr-2" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>;
};
export default AuthButton;