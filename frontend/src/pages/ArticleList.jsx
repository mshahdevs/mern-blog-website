import { articles } from '../utils/data';
import { Articles } from '../components/Articles';
import Dialog from '../components/Dialog';
import { useRef } from 'react';

export const ArticleList = () => {
  const modal = useRef();
  const handleCreatePost = () => {
    modal.current.open();
  };
  return (
    <>
      <Dialog ref={modal} />
      <div className='w-full'>
        <h1 className='text-center m-4 text-2xl font-serif'>Articles</h1>
        <div className='w-[85%] flex justify-end items-end mb-3'>
          <button
            onClick={handleCreatePost}
            className='bg-amber-300 rounded-xl p-1 px-3 ml-4'
          >
            Create Post ✏
          </button>
        </div>
        <Articles articles={articles} />
      </div>
    </>
  );
};
