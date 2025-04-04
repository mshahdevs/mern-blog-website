export const Navbar = () => {
  return (
    <nav className='w-full flex justify-center items-center p-3 text-white/80 bg-amber-600'>
      <div className='flex gap-1.5 justify-center items-center'>
        <a href='#' className='text-xl font-bold'>
          Home
        </a>
        <a href='#' className='text-xl font-bold'>
          About
        </a>
        <a href='#' className='text-xl font-bold'>
          Articles
        </a>
      </div>
    </nav>
  );
};
