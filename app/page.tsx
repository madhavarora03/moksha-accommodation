import { getServerAuthSession } from '@/utils/auth';

const Home = async () => {
  const session = await getServerAuthSession();
  return (
    <div>
      <h1>Hello {session?.user?.email}</h1>
    </div>
  );
};

export default Home;
