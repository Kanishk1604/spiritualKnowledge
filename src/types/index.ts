
export type Language = "english" | "hindi";

export interface Verse {
  chapter: number;
  verse: number;
  text: {
    english: string;
    hindi: string;
  };
  meaning: {
    english: string;
    hindi: string;
  };
}

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

// Update UserProfile interface to include is_premium flag and use number for id
export interface UserProfile {
  id: string;
  email?: string;
  name?: string;
  created_at?: string;
  is_premium?: boolean;
}

// Add ThemeState interface
export interface ThemeState {
  isDark: boolean;
}
