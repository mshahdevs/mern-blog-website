import axios from 'axios';

const API_URL = 'http://localhost:3000/api/posts';
const createPost = async (postData, token) => {
  const response = await axios.get(API_URL + '/create', postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.data) {
    return response.data;
  } else {
    throw new Error('Error creating posts');
  }
};

const getPosts = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  if (response.data) {
    return;
  } else {
    throw new Error('Error fetching posts');
  }
};

export const postService = {
  createPost,
  getPosts,
};
