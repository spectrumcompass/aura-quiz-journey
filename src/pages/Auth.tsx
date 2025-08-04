import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [lastAttempt, setLastAttempt] = useState<number>(0);
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  // Validação e sanitização de entrada
  const validateInput = (email: string, password: string) => {
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Por favor, insira um email válido';
    }

    // Sanitização básica - remove caracteres perigosos
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPassword = password.trim();

    // Validação de comprimento
    if (sanitizedEmail.length > 254) {
      return 'Email muito longo';
    }

    if (sanitizedPassword.length < 6 || sanitizedPassword.length > 128) {
      return 'A senha deve ter entre 6 e 128 caracteres';
    }

    // Verifica caracteres suspeitos
    const suspiciousChars = /[<>'"\\;]/;
    if (suspiciousChars.test(sanitizedEmail) || suspiciousChars.test(sanitizedPassword)) {
      return 'Caracteres inválidos detectados';
    }

    return { sanitizedEmail, sanitizedPassword };
  };

  // Rate limiting básico
  const checkRateLimit = () => {
    const now = Date.now();
    const timeSinceLastAttempt = now - lastAttempt;
    
    if (attempts >= 5 && timeSinceLastAttempt < 300000) { // 5 minutos
      return 'Muitas tentativas. Tente novamente em 5 minutos.';
    }
    
    if (attempts >= 3 && timeSinceLastAttempt < 60000) { // 1 minuto
      return 'Muitas tentativas. Aguarde 1 minuto.';
    }
    
    return null;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Verificar rate limiting
    const rateLimitError = checkRateLimit();
    if (rateLimitError) {
      setError(rateLimitError);
      return;
    }

    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Validar e sanitizar entrada
    const validation = validateInput(email, password);
    if (typeof validation === 'string') {
      setError(validation);
      setIsLoading(false);
      return;
    }

    const { sanitizedEmail, sanitizedPassword } = validation;

    try {
      const { error } = await signIn(sanitizedEmail, sanitizedPassword);
      
      if (error) {
        // Incrementar contador de tentativas
        setAttempts(prev => prev + 1);
        setLastAttempt(Date.now());
        
        // Não expor detalhes específicos do erro por segurança
        const userFriendlyMessage = error.message.includes('Invalid login credentials') 
          ? 'Email ou senha incorretos' 
          : 'Erro no login. Tente novamente.';
          
        setError(userFriendlyMessage);
        toast({
          variant: "destructive",
          title: "Erro no login",
          description: userFriendlyMessage,
        });
      } else {
        // Reset contador em caso de sucesso
        setAttempts(0);
        setLastAttempt(0);
        
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta.",
        });
        navigate('/');
      }
    } catch (err) {
      setError('Erro interno. Tente novamente mais tarde.');
      console.error('Login error:', err);
    }
    
    setIsLoading(false);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-4">
      <Card className="w-full max-w-md shadow-strong">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Compass Assessment
          </CardTitle>
          <CardDescription>
            Entre em sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
              variant="hero"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;