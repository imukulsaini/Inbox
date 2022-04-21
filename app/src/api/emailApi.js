import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { errorHandler } from "./errorHander";

export const getEmailList = createAsyncThunk(
  "email/getEmails",

  async (pageData, { rejectWithValue }) => {
    const { number } = pageData;

    const url = `${process.env.REACT_APP_API_KEY}?page=${number}`;

    try {
      const emailResponse = await axios.get(url);
      return emailResponse.data;
    } catch (error) {
      const message = errorHandler(error);
      return rejectWithValue(message);
    }
  }
);

export const getEmailBody = createAsyncThunk(
  "email/getEmailBody",
  async (emailData, { rejectWithValue }) => {
    const { id } = emailData;
    const url = `https://flipkart-email-mock.vercel.app/?id=${id}`;

    try {
      const emailResponse = await axios.get(url);

      return emailResponse.data;
    } catch (error) {
      const message = errorHandler(error);
      return rejectWithValue(message);
    }
  }
);
