import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className='w-full flex justify-center items-center p-3 text-white/80 bg-amber-600'>
      <div className='flex gap-1.5 justify-center items-center'>
        <Link to='/' className='text-xl font-bold'>
          Home
        </Link>
        <Link to='/about' className='text-xl font-bold'>
          About
        </Link>
        <Link to='/articles-list' className='text-xl font-bold'>
          Articles
        </Link>
      </div>
    </nav>
  );
};
