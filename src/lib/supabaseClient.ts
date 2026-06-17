// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// ត្រូវប្រាកដថា URL បែបនេះសុទ្ធ (គ្មានអក្សរខ្មែរនៅខាងចុង ឬខាងមុខ)
const supabaseUrl = 'https://tjfnanrfuyflghopibng.supabase.co'

// ⚠️ កន្លែងនេះត្រូវកូពីកូដវែងៗដែលផ្តើមដោយ sb_publishable_ មកដាក់ឱ្យអស់
// ហាមសរសេរអក្សរខ្មែរលាយឡំនៅក្នុងសញ្ញា ' ' នេះដាច់ខាត!
const supabaseAnonKey = 'sb_publishable_clhm6ZXYmzRB9X_PybmJmw_DrpjNcPT' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)