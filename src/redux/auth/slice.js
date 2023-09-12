const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, logOut } = authSlice.actions;
export default authSlice.reducer;
