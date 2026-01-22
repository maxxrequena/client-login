/**
 * Validates if a string contains only numeric characters
 * @param value - The string to validate
 * @returns true if the string contains only numbers, false otherwise
 */
export const isNumericOnly = (value: string): boolean => {
  return /^\d*$/.test(value);
};

/**
 * Validates if a PIN has the correct length
 * @param pin - The PIN to validate
 * @param length - The required length (default: 4)
 * @returns true if the PIN has the correct length, false otherwise
 */
export const isValidPinLength = (pin: string, length: number = 4): boolean => {
  return pin.length === length;
};
