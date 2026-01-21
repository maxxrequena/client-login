import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "./src/context/ThemeContext";
import { RecoilRoot } from "recoil";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <RecoilRoot>
        <AppNavigator />
      </RecoilRoot>
    </ThemeProvider>
  );
}
