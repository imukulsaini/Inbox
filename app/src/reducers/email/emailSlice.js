import { createSlice } from "@reduxjs/toolkit";
import { getEmailList, getEmailBody } from "../../api/emailApi";

const initialState = {
  status: "idle",
  emails: [],
  emailBody: {},
  readEmails: [],
  favoritesEmails: [],
  bodyStatus: false,
  error: "",
};

export const emailSlice = createSlice({
  name: "emailList",
  initialState,

  reducers: {
    emailIsOpened: (state, action) => {
      const checkEmailInReadEmails = state.readEmails.indexOf(
        action.payload.id
      );
      if (checkEmailInReadEmails === -1) {
        state.readEmails.push(action.payload.id);
      }
    },
    emailAddedInFavorites: (state, action) => {
      const checkEmailInFavorites = state.favoritesEmail.indexOf(
        action.payload.id
      );
      if (checkEmailInFavorites === -1) {
        state.favoritesEmail.push(action.payload.id);
      }
    },
  },

  extraReducers: {
    [getEmailList.pending]: (state, action) => {
      state.status = "pending";
    },
    [getEmailList.fulfilled]: (state, action) => {
      state.emails = action.payload;
      state.status = "fulfilled";
    },
    [getEmailList.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getEmailBody.pending]: (state, action) => {
      state.status = "pending";
    },
    [getEmailBody.fulfilled]: (state, action) => {
      state.bodyStatus = true;
      state.status = "fulfilled";
      const isEmailExist = state.emails.list.find(
        (email) => email.id === action.payload.id
      );
      if (isEmailExist) {
        state.emailBody = {
          ...isEmailExist,
          bodyText: action.payload.body,
        };
      }
    },
    [getEmailBody.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { emailIsOpened, emailAddedInFavorites } = emailSlice.actions;

export default emailSlice.reducer;
