import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSetRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authState } from "../recoil/atoms";
import { useTheme } from "../context/ThemeContext";

const AUTH_STORAGE_KEY = "@auth_session";
const CORRECT_PIN = "1234";

const LoginScreen: React.FC = () => {
  const setAuth = useSetRecoilState(authState);
  const { colors } = useTheme();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    // Verify PIN length
    if (pin.length < 4) {
      setError("El PIN debe tener 4 dígitos.");
      return;
    }

    // Compare with correct PIN
    if (pin === CORRECT_PIN) {
      try {
        // Clear error
        setError("");
        // Set authentication state to true
        setAuth(true);
        // Save session in AsyncStorage
        await AsyncStorage.setItem(AUTH_STORAGE_KEY, "true");
        console.log("Login successful");
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      setError("PIN incorrecto. Intente de nuevo.");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Login</Text>
      <TextInput
        style={[styles.input, { color: colors.text, borderColor: colors.text }]}
        placeholder="Ingrese su PIN"
        placeholderTextColor="#888"
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
        value={pin}
        onChangeText={setPin}
      />
      {error !== "" && (
        <Text style={[styles.errorText, { color: colors.error }]}>{error}</Text>
      )}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
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
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  errorText: {
    fontSize: 14,
    marginBottom: 10,
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
