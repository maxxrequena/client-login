import React from "react";
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
import { usePinValidation } from "../hooks/usePinValidation";
import { isNumericOnly } from "../utils/validators";
import { STRINGS, AUTH_STORAGE_KEY, CORRECT_PIN } from "../constants/strings";

const LoginScreen: React.FC = () => {
  const setAuth = useSetRecoilState(authState);
  const { colors } = useTheme();
  const { pin, error, handlePinChange, setError } = usePinValidation();

  const handleLogin = async () => {
    // Verify that it only contains numbers
    if (!isNumericOnly(pin)) {
      setError(STRINGS.login.errors.onlyNumbers);
      return;
    }

    // Verify PIN length
    if (pin.length < 4) {
      setError(STRINGS.login.errors.pinLength);
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
        console.log(STRINGS.login.success.loginSuccessful);
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      setError(STRINGS.login.errors.incorrectPin);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        {STRINGS.login.title}
      </Text>
      <TextInput
        style={[styles.input, { color: colors.text, borderColor: colors.text }]}
        placeholder={STRINGS.login.pinPlaceholder}
        placeholderTextColor="#888"
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
        value={pin}
        onChangeText={handlePinChange}
      />
      {error !== "" && (
        <Text style={[styles.errorText, { color: colors.error }]}>{error}</Text>
      )}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>{STRINGS.login.submitButton}</Text>
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
