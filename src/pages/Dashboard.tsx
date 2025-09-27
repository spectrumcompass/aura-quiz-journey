import React, { useEffect, useMemo, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar as CalendarIcon, TrendingUp, Eye, Trash2, Plus, BarChart3, AlertCircle, User, Compass, Shield } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CDMResult, COGNITIVE_ATTRIBUTES } from '@/lib/cdm-model';
import AuthButton from '@/components/AuthButton';
import { CDMResultsView } from '@/components/CDMResultsView';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useUserRole } from '@/hooks/useUserRole';
import { AdminAnalytics } from '@/components/AdminAnalytics';
import { AdminUserManagement } from '@/components/AdminUserManagement';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
interface AssessmentResult {
  id: string;
  title: string;
  cdm_result: CDMResult;
  average_probability: number;
  dominant_attributes: string[];
  created_at: string;
  updated_at: string;
}
const Dashboard = () => {
  const {
    user,
    loading: authLoading
  } = useAuth();
  const { isAdmin, loading: roleLoading } = useUserRole();
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [results, setResults] = useState<AssessmentResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedResult, setSelectedResult] = useState<AssessmentResult | null>(null);

  // Filtros
  const [attributeFilter, setAttributeFilter] = useState<string>('all');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const filteredResults = useMemo(() => {
    let arr = [...results];
    if (attributeFilter !== 'all') {
      arr = arr.filter(r => r.dominant_attributes?.includes(attributeFilter));
    }
    if (startDate) {
      const start = new Date(startDate);
      arr = arr.filter(r => new Date(r.created_at) >= start);
    }
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      arr = arr.filter(r => new Date(r.created_at) <= end);
    }
    arr.sort((a, b) => sortOrder === 'desc' ? b.average_probability - a.average_probability : a.average_probability - b.average_probability);
    return arr;
  }, [results, attributeFilter, startDate, endDate, sortOrder]);
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);
  useEffect(() => {
    if (user) {
      fetchResults();
    }
  }, [user]);
  const fetchResults = async () => {
    try {
      setLoading(true);
      const {
        data,
        error
      } = await supabase.from('assessment_results').select('*').order('created_at', {
        ascending: false
      });
      if (error) throw error;
      setResults((data || []).map(item => ({
        ...item,
        cdm_result: item.cdm_result as unknown as CDMResult
      })));
    } catch (err) {
      console.error('Error fetching results:', err);
      setError('Erro ao carregar os resultados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };
  const deleteResult = async (id: string) => {
    try {
      const {
        error
      } = await supabase.from('assessment_results').delete().eq('id', id);
      if (error) throw error;
      setResults(results.filter(r => r.id !== id));
      toast({
        title: "Resultado excluído",
        description: "O resultado foi removido com sucesso."
      });
    } catch (err) {
      console.error('Error deleting result:', err);
      toast({
        variant: "destructive",
        title: "Erro ao excluir",
        description: "Não foi possível excluir o resultado."
      });
    }
  };
  if (authLoading || loading || roleLoading) {
    return <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-64" />)}
          </div>
        </div>
      </div>;
  }
  if (!user) {
    return null;
  }
  return <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Dashboard
              </h1>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  <User className="w-3 h-3 mr-1" />
                  {user.user_metadata?.display_name || user.email}
                </Badge>
                {isAdmin && (
                  <Badge variant="default" className="hidden sm:inline-flex">
                    <Shield className="w-3 h-3 mr-1" />
                    Admin
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Compass className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Filtros de Busca</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div>
                      <label className="text-sm font-medium">Atributo Dominante</label>
                      <Select value={attributeFilter} onValueChange={setAttributeFilter}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Todos os atributos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos os atributos</SelectItem>
                          {COGNITIVE_ATTRIBUTES.map(attr => <SelectItem key={attr.id} value={attr.id}>{attr.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Data Inicial</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant={"outline"} className={cn("mt-1 w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {startDate ? format(startDate, "dd/MM", {
                              locale: ptBR
                            }) : <span>Inicial</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus className={cn("p-3 pointer-events-auto")} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Data Final</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant={"outline"} className={cn("mt-1 w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {endDate ? format(endDate, "dd/MM", {
                              locale: ptBR
                            }) : <span>Final</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus className={cn("p-3 pointer-events-auto")} />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Ordenação</label>
                      <Select value={sortOrder} onValueChange={v => setSortOrder(v as 'asc' | 'desc')}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Ordenar por alinhamento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="desc">Maior alinhamento primeiro</SelectItem>
                          <SelectItem value="asc">Menor alinhamento primeiro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        {filteredResults.length} de {results.length} resultados
                      </p>
                      <Button variant="outline" size="sm" onClick={() => {
                      setAttributeFilter('all');
                      setStartDate(undefined);
                      setEndDate(undefined);
                      setSortOrder('desc');
                    }}>
                        Limpar Filtros
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button onClick={() => navigate('/assessment')} variant="hero" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Novo Assessment
              </Button>
              <AuthButton />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {isAdmin ? (
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Meus Assessments</TabsTrigger>
              <TabsTrigger value="admin">Análise Geral</TabsTrigger>
              <TabsTrigger value="users">Usuários</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="space-y-6 mt-6">
              {renderPersonalDashboard()}
            </TabsContent>
            
            <TabsContent value="admin" className="space-y-6 mt-6">
              <AdminAnalytics />
            </TabsContent>
            
            <TabsContent value="users" className="space-y-6 mt-6">
              <AdminUserManagement />
            </TabsContent>
          </Tabs>
        ) : (
          renderPersonalDashboard()
        )}
      </div>
    </div>;
  
  function renderPersonalDashboard() {
    return (
      <>
        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Assessments
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{results.length}</div>
              <p className="text-xs text-muted-foreground">
                {results.length === 1 ? 'resultado salvo' : 'resultados salvos'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Última Avaliação
              </CardTitle>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {results.length > 0 ? format(new Date(results[0].created_at), 'dd/MM', {
                locale: ptBR
              }) : '--'}
              </div>
              <p className="text-xs text-muted-foreground">
                {results.length > 0 ? format(new Date(results[0].created_at), 'PPP', {
                locale: ptBR
              }) : 'Nenhuma avaliação ainda'}
              </p>
            </CardContent>
          </Card>

          {/* Average Alignment Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Em Breve</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              
              
            </CardContent>
          </Card>
        </div>

        {/* Error State */}
        {error && <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>}

        {/* Results Grid */}
        {results.length === 0 ? <Card className="text-center py-12">
            <CardContent>
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <CardTitle className="mb-2">Nenhum resultado ainda</CardTitle>
              <CardDescription className="mb-4">
                Faça seu primeiro assessment para começar a ver seus resultados aqui.
              </CardDescription>
              <Button onClick={() => navigate('/assessment')} variant="hero">
                <Plus className="w-4 h-4 mr-2" />
                Fazer Assessment
              </Button>
            </CardContent>
          </Card> : filteredResults.length === 0 ? <Card className="text-center py-12">
            <CardContent>
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <CardTitle className="mb-2">Nenhum resultado com esses filtros</CardTitle>
              <CardDescription className="mb-4">
                Ajuste os filtros de atributo, data ou ordenação para ver resultados.
              </CardDescription>
              <Button variant="outline" onClick={() => {
            setAttributeFilter('all');
            setStartDate(undefined);
            setEndDate(undefined);
            setSortOrder('desc');
          }}>
                Limpar filtros
              </Button>
            </CardContent>
          </Card> : <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResults.map(result => <Card key={result.id} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{result.title}</CardTitle>
                      <CardDescription>
                        {format(new Date(result.created_at), 'PPp', {
                    locale: ptBR
                  })}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">
                      {Math.round(result.average_probability * 100)}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Atributos Dominantes:</p>
                      <div className="flex flex-wrap gap-1">
                        {result.dominant_attributes.slice(0, 3).map(attr => <Badge key={attr} variant="outline" className="text-xs">
                            {attr.replace('_', ' ')}
                          </Badge>)}
                        {result.dominant_attributes.length > 3 && <Badge variant="outline" className="text-xs">
                            +{result.dominant_attributes.length - 3}
                          </Badge>}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1" onClick={() => setSelectedResult(result)}>
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Detalhes
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{result.title}</DialogTitle>
                          </DialogHeader>
                          {selectedResult && <CDMResultsView result={selectedResult.cdm_result} />}
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="destructive" size="sm" onClick={() => deleteResult(result.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>}
      </>
    );
  }
};
export default Dashboard;