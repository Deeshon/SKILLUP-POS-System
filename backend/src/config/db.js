import {createClient} from '@supabase/supabase-js';
import dotenv from 'dotenv'

dotenv.config({path: './.env.local'})

// create supabase client for interacting with the database
const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_ANON_KEY)

export default supabase;