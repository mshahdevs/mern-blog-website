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
      <div className='w-full flex flex-col items-center justify-center'>
        <h1>Articles</h1>
        <button onClick={handleCreatePost} className=''>
          Create post
        </button>
        <Articles articles={articles} />
      </div>
    </>
  );
};
