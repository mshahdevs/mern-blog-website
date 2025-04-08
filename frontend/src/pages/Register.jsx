import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../store/slices/auth/userSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const Register = () => {
  const { user, isError, isLoading, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);
  const [users, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = users;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    dispatch(register(userData));
    setUser({
      name: '',
      email: '',
      password: '',
    });
  };
  useEffect(() => {
    if (isError) {
      toast.error(message);
      return;
    }

    dispatch(reset());
  }, [dispatch, isError, user]);
  if (isLoading) {
    return <h1 className='font-semibold text-sm bg-amber-800'>Loading....</h1>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <div className='border p-3 flex flex-col justify-center items-center gap-2'>
          <h1 className='font-semibold'>Register</h1>
          <div>
            <label htmlFor='name'>Username</label>
            <input
              type='text'
              name='name'
              className='border border-gray-300 p-1 m-1'
              value={name}
              onChange={handleChange}
              id='username'
            />
          </div>
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
            Register
          </button>
        </div>
      </form>
    </>
  );
};
