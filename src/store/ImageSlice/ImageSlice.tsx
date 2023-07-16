import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    image: null,
  },
  reducers: {
    uploadImage: (state, action) => {
      state.image = action.payload;
    },
  },
});
export const { uploadImage } = imageSlice.actions;
export default imageSlice.reducer;
