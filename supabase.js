// Importamos Supabase directamente desde el CDN para que funcione en el navegador
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Limpiamos la URL quitándole el "/rest/v1/" del final
const SUPABASE_URL = "https://zjgudkesrryxesgrntlw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZ3Vka2VzcnJ5eGVzZ3JudGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4NDk0OTIsImV4cCI6MjEwMTQyNTQ5Mn0.K0BpufCiOZCrbc-Oh4OZTQ8rnoRBhPEJz8bFp_mhHR4";

// Al poner 'export', permites que otros archivos lo importen
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
