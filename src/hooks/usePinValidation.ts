import { useState } from "react";
import { isNumericOnly } from "../utils/validators";
import { STRINGS } from "../constants/strings";

interface UsePinValidationReturn {
  pin: string;
  error: string;
  handlePinChange: (value: string) => void;
  setError: (error: string) => void;
  clearError: () => void;
  resetPin: () => void;
}

/**
 * Custom hook for PIN input validation
 * Handles PIN state, validation, and error messages
 */
export const usePinValidation = (): UsePinValidationReturn => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  /**
   * Handles PIN input changes with numeric validation
   * Only allows numeric characters and clears errors on valid input
   */
  const handlePinChange = (value: string) => {
    // Only update if it's numeric or empty
    if (isNumericOnly(value)) {
      setPin(value);
      setError(""); // Clear error when typing correctly
    } else {
      setError(STRINGS.usePinValidation.onlyNumbers);
    }
  };

  /**
   * Clears the error message
   */
  const clearError = () => {
    setError("");
  };

  /**
   * Resets the PIN to empty string
   */
  const resetPin = () => {
    setPin("");
  };

  return {
    pin,
    error,
    handlePinChange,
    setError,
    clearError,
    resetPin,
  };
};
