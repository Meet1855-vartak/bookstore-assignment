import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://batrrovpwtdkvjfucwch.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhdHJyb3Zwd3Rka3ZqZnVjd2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNjY3ODAsImV4cCI6MjA5Njc0Mjc4MH0.DndXoLZ3wI0I-sbKxfn5gRodOJe-Tl92x4Cd5kCxDMc"
);