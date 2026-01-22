import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authState } from "../recoil/atoms";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ThemeToggleButtons from "../components/ThemeToggleButtons/ThemeToggleButtons";

const AUTH_STORAGE_KEY = "@auth_session";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useRecoilValue(authState);
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        // Check if there's a saved session in AsyncStorage
        const savedSession = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (savedSession === "true") {
          setAuth(true);
        }
      } catch (error) {
        console.error("Error checking auth state:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthState();
  }, [setAuth]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {isAuthenticated ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>

      <View style={styles.themeButtonsContainer}>
        <ThemeToggleButtons />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  themeButtonsContainer: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1000,
  },
});

export default AppNavigator;
