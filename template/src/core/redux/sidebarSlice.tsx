import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  miniSidebar: false,
  mobileSidebar: false,
  expandMenu: false,
  toggleHeader: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setMiniSidebar: (state, action) => {
      state.miniSidebar = action.payload;
    },
    setMobileSidebar: (state, action) => {
      state.mobileSidebar = action.payload;
    },
    setExpandMenu: (state, { payload }) => {
      state.expandMenu = payload;
    },
     setToggleHeader: (state, { payload }) => {
      state.toggleHeader = payload;
    },
  },
});

export const {
  setMiniSidebar,
  setMobileSidebar,
  setExpandMenu,
  setToggleHeader
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
