import { MMKV } from "react-native-mmkv";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../database.types";
import Constants from "expo-constants";
import { AppState } from "react-native";

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

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
