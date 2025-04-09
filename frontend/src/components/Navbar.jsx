import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/auth/userSlice';
import { toast } from 'react-toastify';
export const Navbar = () => {
  const { user, message } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    toast.success(message);
    navigate('/');
    dispatch(logout());
  };
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
        {user ? (
          <Link to='/' className='text-xl font-bold'>
            <button onClick={handleLogout}>Logout</button>
          </Link>
        ) : (
          <>
            <Link to='/register' className='text-xl font-bold'>
              Register
            </Link>
            <Link to='/login' className='text-xl font-bold'>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
