// app/dashboard/home/HomePage.tsx
import { useSelector } from 'react-redux';

const HomePage = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <div>
      <h1>Welcome, {profile.name}!</h1>
    </div>
  );
};

export default HomePage;