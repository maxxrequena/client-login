import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";

const ThemeToggleButtons: React.FC = () => {
  const { setTheme, theme, colors } = useTheme();

  return (
    <View style={styles.themeButtons}>
      {theme === "light" ? (
        <TouchableOpacity onPress={() => setTheme("dark")}>
          <MaterialIcons name="dark-mode" size={20} color={colors.text} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setTheme("light")}>
          <MaterialIcons name="light-mode" size={20} color={colors.text} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  themeButtons: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 30,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },
});

export default ThemeToggleButtons;
