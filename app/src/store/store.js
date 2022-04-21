import { configureStore } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage } from "../localStorage";
import emailReducer from "../reducers/email/emailSlice";

const persistance = loadStateFromLocalStorage();
export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
  preloadedState: {
    email: {
      readEmails: persistance?.readEmails || [],
      favoritesEmail: persistance?.favoritesEmail || [],
    },
  },
});
