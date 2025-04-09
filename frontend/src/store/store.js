import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/auth/userSlice';
import postReducer from '../store/slices/post/postSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export default store;
