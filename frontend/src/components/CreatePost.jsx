import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getPosts } from '../store/slices/post/postSlice';
export const CreatePost = () => {
  const { posts, isError, isSuccess, message } = useSelector(
    (state) => state.post
  );
  console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getPosts());
  }, [dispatch, posts, isError, isSuccess]);
  return (
    <>
      <h1 className='text-center m-1'>Create Post</h1>
      <form method='dialog' className='flex flex-col w-full gap-1'>
        <div className='flex flex-col'>
          <label className='text-[15px] font-semibold font-mono m-0.5'>
            Title
          </label>
          <input
            type='text'
            className='border border-gray-400 rounded-[10px] p-1 px-2'
            name='title'
            required
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-[15px] font-semibold font-mono m-0.5'>
            Content
          </label>
          <textarea
            name='content'
            className='border border-gray-400 resize-y rounded-[10px] p-1 px-2'
            placeholder='Write something here....'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-amber-500 rounded-xl p-1 text-white'
        >
          Create
        </button>
      </form>
    </>
  );
};
