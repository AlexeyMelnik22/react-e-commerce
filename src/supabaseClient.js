import { createClient } from '@supabase/supabase-js';

// Замініть на ваші власні URL та KEY з налаштувань Supabase
const supabaseUrl = 'https://fkefnffwdvwpwznuvofu.supabase.co';
const supabaseKey = 'sb_publishable_g-n5zwURXkjIC9hJntjZ_Q_dAp_3-fc';

export const supabase = createClient(supabaseUrl, supabaseKey);