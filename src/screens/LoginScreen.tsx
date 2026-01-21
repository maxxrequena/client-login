import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSetRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authState } from "../recoil/atoms";
import { useTheme } from "../context/ThemeContext";

const AUTH_STORAGE_KEY = "@auth_session";

const LoginScreen: React.FC = () => {
  const setAuth = useSetRecoilState(authState);
  const { colors } = useTheme();

  const handleLogin = async () => {
    try {
      // Set authentication state to true
      setAuth(true);
      // Save session in AsyncStorage
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, "true");
      console.log("Login successful");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Login</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginScreen;
