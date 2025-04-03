import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'SUA_URL_DO_PROJETO'; // cole aqui
const supabaseAnonKey = 'SUA_ANON_KEY';  // cole aqui

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
