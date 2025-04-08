import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/auth/userSlice';
const store = configureStore({
  reducer: {
    user: userReducer.reducer,
  },
});

export default store;
