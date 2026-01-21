import { atom } from "recoil";

// Type for user state
export interface User {
  name: string;
  email: string;
}

// Atom for authentication state
export const authState = atom<boolean>({
  key: "authState",
  default: false,
});

// Atom for user data
export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
