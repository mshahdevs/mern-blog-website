import React from 'react';

export const CreatePost = () => {
  return (
    <>
      <h1>Create Post</h1>
      <form method='dialog'>
        <label>Title</label>
        <input type='text' name='title' required />
        <label>Content</label>
        <textarea name='content' required></textarea>
        <button type='submit'>Create</button>
      </form>
    </>
  );
};
