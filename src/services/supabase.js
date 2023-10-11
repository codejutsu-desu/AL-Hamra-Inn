import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ndriuclasgbtlydpbtnn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kcml1Y2xhc2didGx5ZHBidG5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4MjY4OTEsImV4cCI6MjAxMjQwMjg5MX0.aTR8HHwl4uk9Gdm-FBuYUBcoqPC7NyIAkz8-AOlmbpk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
