import { usePinValidation } from "../hooks/usePinValidation";

export const STRINGS = {
  login: {
    title: "Login",
    pinPlaceholder: "Ingrese su PIN",
    submitButton: "Ingresar",
    errors: {
      onlyNumbers:
        "Solo se permiten números. No se aceptan letras ni caracteres especiales.",
      pinLength: "El PIN debe tener 4 dígitos.",
      incorrectPin: "PIN incorrecto. Intente de nuevo.",
    },
    success: {
      loginSuccessful: "Login successful",
    },
  },

  home: {
    title: "Home",
    welcome: "Bienvenido",
    logoutButton: "Cerrar Sesión",
  },

  common: {
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    cancel: "Cancelar",
    confirm: "Confirmar",
  },

  usePinValidation: {
    onlyNumbers:
      "Solo se permiten números. No se aceptan letras ni caracteres especiales.",
  },
};

export const AUTH_STORAGE_KEY = "@auth_session";
export const CORRECT_PIN = "1234";
