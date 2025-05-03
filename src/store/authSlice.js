import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  users: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const user = state.users.find(
        (item) => item.user === action.payload.user
      );
      if (user && user.password === action.payload.password) {
        state.isAuth = true;
      }
      console.log(action.payload.user, action.payload.password, state.isAuth);
    },
    Logout(state, action) {
      state.isAuth = false;
    },
    signUp(state, action) {
      state.users.push({
        id: Date.now(),
        user: action.payload.user,
        password: action.payload.password,
      });
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
