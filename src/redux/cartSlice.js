import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   tokenValue: localStorage.getItem("cartTokenValue"),
   items: [],
   id: null,
};

export const cartSlice = createSlice({
   name: "cartSlice",
   initialState,
   reducers: {
      setTokenValue: (state, action) => {
         console.log(">>set token value action", action);

         localStorage.setItem("cartTokenValue", action.payload.tokenValue);
         state.tokenValue = action.payload.tokenValue;
      },
      updateFullCart: (state, action) => {
         console.log(">>updateFullCart", action);

         return action.payload;
      },
   },
});

export default cartSlice.reducer;

export const { setTokenValue, updateFullCart } = cartSlice.actions;
