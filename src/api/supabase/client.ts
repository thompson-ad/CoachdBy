import { MMKV } from "react-native-mmkv";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../database.types";
import Constants from "expo-constants";

const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl;
const supabaseKey = Constants.expoConfig?.extra?.supabaseKey;

if (!supabaseUrl) {
  throw new Error(
    `EXPO_PUBLIC_SUPABASE_URL is not set. Please update the root .env.local and restart the server.`
  );
}

if (!supabaseKey) {
  throw new Error(
    `EXPO_PUBLIC_SUPABASE_ANON_KEY is not set. Please update the root .env.local and restart the server.`
  );
}

export const storage = new MMKV();

const MMKVAdapter = {
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) || null : null;
  },
  setItem: (key: string, value: string) => {
    storage.set(key, JSON.stringify(value));
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
};

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    storage: MMKVAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
