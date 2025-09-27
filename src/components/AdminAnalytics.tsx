import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, Users, BarChart3, AlertCircle, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CDMResult } from '@/lib/cdm-model';
import { CDMResultsView } from '@/components/CDMResultsView';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface AssessmentWithUser {
  id: string;
  title: string;
  cdm_result: CDMResult;
  average_probability: number;
  dominant_attributes: string[];
  created_at: string;
  user_id: string;
  profiles?: {
    display_name?: string;
  } | null;
}

export const AdminAnalytics = () => {
  const [assessments, setAssessments] = useState<AssessmentWithUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedResult, setSelectedResult] = useState<AssessmentWithUser | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchAllAssessments();
  }, []);

  const fetchAllAssessments = async () => {
    try {
      setLoading(true);
      
      // First get all assessment results
      const { data: assessmentData, error: assessmentError } = await supabase
        .from('assessment_results')
        .select('*')
        .order('created_at', { ascending: false });

      if (assessmentError) throw assessmentError;

      // Then get all profiles for the users who have assessments
      const userIds = [...new Set(assessmentData?.map(a => a.user_id) || [])];
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('user_id, display_name')
        .in('user_id', userIds);

      if (profilesError) throw profilesError;

      // Create a map of user_id to profile
      const profilesMap = new Map(profilesData?.map(p => [p.user_id, p]) || []);

      // Combine the data
      const combinedData = (assessmentData || []).map(assessment => ({
        ...assessment,
        cdm_result: assessment.cdm_result as unknown as CDMResult,
        profiles: profilesMap.get(assessment.user_id) || null
      }));

      setAssessments(combinedData);
    } catch (err) {
      console.error('Error fetching assessments:', err);
      setError('Erro ao carregar os dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const exportData = () => {
    const csvData = assessments.map(assessment => ({
      'Data': format(new Date(assessment.created_at), 'dd/MM/yyyy HH:mm', { locale: ptBR }),
      'Usuário': assessment.profiles?.display_name || 'Usuário Anônimo',
      'Título': assessment.title,
      'Probabilidade Média': `${Math.round(assessment.average_probability * 100)}%`,
      'Atributos Dominantes': assessment.dominant_attributes.join(', '),
      'ID Usuário': assessment.user_id
    }));

    const csv = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `assessments_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Dados exportados",
      description: "Os dados foram exportados com sucesso."
    });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
        <Skeleton className="h-96" />
      </div>
    );
  }

  const uniqueUsers = new Set(assessments.map(a => a.user_id)).size;
  const avgCompletion = assessments.reduce((acc, a) => acc + a.average_probability, 0) / assessments.length || 0;

  return (
    <div className="space-y-6">
      {/* Admin Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Assessments</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assessments.length}</div>
            <p className="text-xs text-muted-foreground">
              Todas as avaliações no sistema
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Únicos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{uniqueUsers}</div>
            <p className="text-xs text-muted-foreground">
              Usuários que fizeram assessments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alinhamento Médio</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(avgCompletion * 100)}%</div>
            <p className="text-xs text-muted-foreground">
              Probabilidade média geral
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Error State */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Export Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Todas as Respostas dos Usuários</h3>
        <Button onClick={exportData} variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Exportar CSV
        </Button>
      </div>

      {/* Assessments Table */}
      {assessments.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <CardTitle className="mb-2">Nenhum assessment encontrado</CardTitle>
            <p className="text-muted-foreground">
              Ainda não há assessments no sistema.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Alinhamento</TableHead>
                  <TableHead>Atributos</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assessments.map((assessment) => (
                  <TableRow key={assessment.id}>
                    <TableCell>
                      {format(new Date(assessment.created_at), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {assessment.profiles?.display_name || 'Usuário Anônimo'}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {assessment.user_id.slice(0, 8)}...
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{assessment.title}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {Math.round(assessment.average_probability * 100)}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {assessment.dominant_attributes.slice(0, 2).map((attr) => (
                          <Badge key={attr} variant="outline" className="text-xs">
                            {attr.replace('_', ' ')}
                          </Badge>
                        ))}
                        {assessment.dominant_attributes.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{assessment.dominant_attributes.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedResult(assessment)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Detalhes
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>
                              {assessment.title} - {assessment.profiles?.display_name || 'Usuário Anônimo'}
                            </DialogTitle>
                          </DialogHeader>
                          {selectedResult && (
                            <CDMResultsView result={selectedResult.cdm_result} />
                          )}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};