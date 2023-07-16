import { configureStore } from '@reduxjs/toolkit';
import imageSlice from './ImageSlice/ImageSlice.tsx';

const store = configureStore({
  reducer: {
    image: imageSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
