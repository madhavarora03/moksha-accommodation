import { getServerAuthSession } from '@/utils/auth';
import { redirect } from 'next/navigation';

type UserData = {
  name: string;
  team_name: string;
  college_name: string;
  age: number;
  gender: string;
  member_mail: string;
  leader_id: string;
  phone: string;
  check_in_date: number;
  check_out_date: number;
  confirmation_status: boolean;
};

const ProfilePage = async () => {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    redirect('/signin');
  }

  const {
    user: { email },
  } = session;

  const data = await fetch(
    `https://script.google.com/macros/s/AKfycbyj0WYvmQP6w1GGgSYkBrpPY6srRSUMZtndwltu3BGBOeCPWtiBOdcdSb6wVZ3dl1YJGQ/exec?id=${email}`,
    {
      cache: 'no-store',
    }
  );
  const res = await data.json();
  const userData: UserData[] = res.data;

  return (
    <div>
      {userData.map((user: UserData) => (
        <div key={user.leader_id}>
          <h1>{user.name}</h1>
          <h2>{user.team_name} of {user.college_name}</h2>
          <p>
            <p>{user.age} years old and {user.gender} Gender</p>
            <p>Email: {user.member_mail}</p>
            <p>Phone: {user.phone}</p>
          </p>
          <div>
            <p>Check In Date {user.check_in_date}</p>
            <p>Check Out Date {user.check_out_date}</p>
            <p>Confirmation Status: {user.confirmation_status ? "Confirmed" : "Not Confirmed"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
