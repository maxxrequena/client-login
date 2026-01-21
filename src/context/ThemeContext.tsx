import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "@app_theme";

export interface Theme {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  card: string;
  border: string;
  error: string;
  success: string;
}

export interface ThemeContextType {
  theme: ThemeMode;
  colors: Theme;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const lightTheme: Theme = {
  background: "#FFFFFF",
  text: "#000000",
  primary: "#007AFF",
  secondary: "#5856D6",
  card: "#F2F2F7",
  border: "#C6C6C8",
  error: "#FF3B30",
  success: "#34C759",
};

const darkTheme: Theme = {
  background: "#000000",
  text: "#FFFFFF",
  primary: "#0A84FF",
  secondary: "#5E5CE6",
  card: "#1C1C1E",
  border: "#38383A",
  error: "#FF453A",
  success: "#32D74B",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>("light");

  // Load the saved theme when the app starts
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === "light" || savedTheme === "dark") {
          setThemeState(savedTheme);
        }
      } catch (error) {
        console.error("Error loading theme from AsyncStorage:", error);
      }
    };

    loadTheme();
  }, []);

  const colors = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = async () => {
    try {
      const newTheme = theme === "light" ? "dark" : "light";
      setThemeState(newTheme);
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error("Error saving theme to AsyncStorage:", error);
    }
  };

  const setTheme = async (newTheme: ThemeMode) => {
    try {
      setThemeState(newTheme);
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error("Error saving theme to AsyncStorage:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
