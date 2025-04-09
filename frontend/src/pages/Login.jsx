import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/slices/auth/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
    setUser({
      email: '',
      password: '',
    });
  };
  useEffect(() => {
    if (isError) {
      toast.error(message);
      return;
    }
    if (isSuccess || user) {
      navigate('/');
      toast.success(message);
    }
  }, [dispatch, isSuccess, navigate, user, isError]);
  if (isLoading) {
    return <h1 className='font-semibold text-sm bg-amber-800'>Loading....</h1>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <div className='border p-3 flex flex-col justify-center items-center gap-2'>
          <h1 className='font-semibold'>Login</h1>

          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='border p-1 border-gray-300 m-1'
              name='email'
              value={email}
              onChange={handleChange}
              id='email'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='text'
              name='password'
              className='border p-1 border-gray-300 m-1'
              value={password}
              onChange={handleChange}
              id='password'
            />
          </div>
          <button type='submit' className='bg-amber-600 text-white p-2'>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
