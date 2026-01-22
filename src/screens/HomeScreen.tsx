import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSetRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authState } from "../recoil/atoms";
import { useTheme } from "../context/ThemeContext";

const AUTH_STORAGE_KEY = "@auth_session";

const HomeScreen: React.FC = () => {
  const setAuth = useSetRecoilState(authState);
  const { colors } = useTheme();

  const handleLogout = async () => {
    try {
      // Set authentication state to false
      setAuth(false);
      // Clear session from AsyncStorage
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
      console.log("Logout successful");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Home</Text>

      <TouchableOpacity
        style={[styles.logoutButton, { backgroundColor: colors.error }]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
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
  logoutButton: {
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

export default HomeScreen;
