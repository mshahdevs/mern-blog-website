import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CreatePost } from './createPost';
const Dialog = forwardRef((props, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>
      <CreatePost />
      <form method='dialog'>
        <button className='bg-red-700 w-full my-2 text-white p-1 rounded-xl'>
          Cancel
        </button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default Dialog;
