import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postService } from './postService';
const initialState = {
  posts: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};
export const createPost = createAsyncThunk(
  'post/create',
  async (postData, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().user.user.token;
      console.log('token', token);
      return await postService.createPost(postData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPosts = createAsyncThunk('post/create', async (_, thunkAPI) => {
  try {
    const token = await thunkAPI.getState().user.user.token;
    console.log('token', token);
    return await postService.getPosts(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.isSuccess = true;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = postSlice.actions;

export default postSlice.reducer;
