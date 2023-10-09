import { createSlice } from "@reduxjs/toolkit";

const namespace = "baseData";

const initialState = {
  data: {
    homes: [true, false, false],
    tabs: [true, false, false, false],
    messages: [true, false, false],
    productDetails: [true, false, false],
  },
};

const baseData = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setHomes: (state, action) => {
      const index = action.payload;
      for (let i = 0; i < state.data.homes.length; i++) {
        state.data.homes[i] = true
          ? i === index
          : (state.data.homes[i] = false);
      }
    },
    setTabs: (state, action) => {
      const index = action.payload;
      for (let i = 0; i < state.data.tabs.length; i++) {
        state.data.tabs[i] = true ? i === index : (state.data.tabs[i] = false);
      }
    },
    setMessages: (state, action) => {
      const index = action.payload;
      for (let i = 0; i < state.data.messages.length; i++) {
        state.data.messages[i] = true
          ? i === index
          : (state.data.messages[i] = false);
      }
    },
    setProductDetails: (state, action) => {
      const index = action.payload;
      for (let i = 0; i < state.data.productDetails.length; i++) {
        state.data.productDetails[i] = true
          ? i === index
          : (state.data.productDetails[i] = false);
      }
    },
  },
});

const { reducer, actions } = baseData;
export const { setMessages, setHomes, setTabs, setProductDetails } = actions;
export default reducer;
