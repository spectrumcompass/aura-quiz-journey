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
import { z } from 'zod';

// Schema-based validation instead of character blacklisting
const loginSchema = z.object({
  email: z.string().email('Email inválido').max(254, 'Email muito longo'),
  password: z.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .max(128, 'Senha deve ter no máximo 128 caracteres')
});

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  // Schema-based validation using Zod
  const validateInput = (email: string, password: string) => {
    const result = loginSchema.safeParse({ 
      email: email.trim().toLowerCase(), 
      password: password.trim() 
    });
    
    if (!result.success) {
      return result.error.errors[0].message;
    }
    
    return { 
      sanitizedEmail: result.data.email, 
      sanitizedPassword: result.data.password 
    };
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    // Note: Rate limiting is handled server-side by Supabase Auth

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
        // Don't expose specific error details for security
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
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta.",
        });
        navigate('/');
      }
    } catch (err) {
      // Log only in development, not in production
      if (import.meta.env.DEV) {
        console.error('Login error:', err);
      }
      setError('Erro interno. Tente novamente mais tarde.');
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