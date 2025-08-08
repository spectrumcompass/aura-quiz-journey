import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LogIn, LogOut, User, BarChart3 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
const AuthButton = () => {
  const {
    user,
    signOut,
    loading
  } = useAuth();
  if (loading) {
    return <Button variant="soft" size="sm" disabled>
        <User className="h-4 w-4 mr-2" />
        Carregando...
      </Button>;
  }
  if (!user) {
    return <Button asChild variant="soft" size="sm">
        
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
        <DropdownMenuItem onClick={signOut} className="text-destructive">
          <LogOut className="h-4 w-4 mr-2" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>;
};
export default AuthButton;