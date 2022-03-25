import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";



export const counterSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const {
  setUser
} = counterSlice.actions;

export default counterSlice.reducer;
