import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cuveebmobvnjfsombuar.supabase.co"
const supabaseAnonKey  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1dmVlYm1vYnZuamZzb21idWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExODExMjMsImV4cCI6MjAyNjc1NzEyM30.1REw3p7EhUFvDqwcABKt-0BB0AWCG-pNyTALUh8Z7hs"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
