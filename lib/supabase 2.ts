import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cjwhychqcklykfagvlua.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqd2h5Y2hxY2tseWtmYWd2bHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MDI5MzYsImV4cCI6MjAyNTM3ODkzNn0.eQReKQE-yk92iLEy4J_OJlIu8VPmMidcufd2hA6Hj3A"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})