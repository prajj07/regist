// app/auth/register/UserRegister.tsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_NAME } from '../lib/store/reducers/profileSlice';

const UserRegister = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(SET_NAME(name));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegister;