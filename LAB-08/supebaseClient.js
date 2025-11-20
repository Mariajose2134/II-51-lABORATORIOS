import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ==========================
// CONFIGURA TU SUPABASE
// ==========================
let SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5cGZlZ3drYXNucXhsaWp3a2tmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NjExNzUsImV4cCI6MjA3NjEzNzE3NX0.iiCSWOGF2wkCy3lbyBq9Qp3Jhw5ld-oirzV9FRBGmBc";
let SUPABASE_URL = "https://eypfegwkasnqxlijwkkf.supabase.co";

// Crear cliente una sola vez
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
 