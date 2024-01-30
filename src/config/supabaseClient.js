import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://kbvexiicmzjxtlfbzawt.supabase.co"
const supabaseAnonKey  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtidmV4aWljbXpqeHRsZmJ6YXd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1OTUwOTEsImV4cCI6MjAyMjE3MTA5MX0.zx01Uy5-hpKmQoYPZUYNwYLYDmWAlTO9M-yO-b6T07c"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase