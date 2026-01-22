import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useTheme } from "../../context/ThemeContext";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const { colors } = useTheme();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleFinish = () => {
    Alert.alert("Resultado", `El contador es: ${count}`, [
      {
        text: "OK",
        onPress: () => setCount(0),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.counterDisplay, { backgroundColor: colors.card }]}>
        <Text style={[styles.counterText, { color: colors.text }]}>
          {count}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={handleDecrement}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={handleIncrement}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.finishButton,
          { backgroundColor: colors.success || "#4CAF50" },
        ]}
        onPress={handleFinish}
      >
        <Text style={styles.buttonText}>Fin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  counterDisplay: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 12,
    marginBottom: 20,
    minWidth: 120,
    alignItems: "center",
  },
  counterText: {
    fontSize: 48,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  finishButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    minWidth: 140,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "600",
  },
});

export default Counter;
