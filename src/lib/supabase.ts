import { createClient } from "@supabase/supabase-js";
/// <reference types="vite/client" />
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!,
);
