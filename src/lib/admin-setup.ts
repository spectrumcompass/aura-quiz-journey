import { supabase } from '@/integrations/supabase/client';

export const promoteCurrentUserToAdmin = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('Usuário não autenticado');
  }

  try {
    // Check if user already has a role
    const { data: existingRole } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .single();

    if (existingRole) {
      // Update existing role to admin
      const { error } = await supabase
        .from('user_roles')
        .update({ role: 'admin' })
        .eq('user_id', user.id);

      if (error) throw error;
    } else {
      // Insert new admin role
      const { error } = await supabase
        .from('user_roles')
        .insert({ user_id: user.id, role: 'admin' });

      if (error) throw error;
    }

    return { success: true, message: 'Usuário promovido a admin com sucesso!' };
  } catch (error) {
    console.error('Error promoting user to admin:', error);
    return { success: false, message: 'Erro ao promover usuário a admin.' };
  }
};