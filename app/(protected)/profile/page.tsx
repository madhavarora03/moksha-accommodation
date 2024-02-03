import { getServerAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
    redirect('/signin?callbackUrl=/profile');
  }

  const {
    user: { email },
  } = session;

  const data = await fetch(
    `https://script.google.com/macros/s/AKfycbzYZP0zcq_4_5GtCtMai1JhJsxqY4_wfsJgxYG4qyQiFRLpisNt3RoqwG1yC55AVU40UQ/exec?id=${email}`,
    {
      cache: 'no-store',
    },
  );
  const res = await data.json();
  const userData: UserData[] = res.data;
  if (userData.length === 0) {
    return (
      <div>
        <h1>You are not registered yet.</h1>
      </div>
    );
  }

  return (
    <div
      className='mx-auto rounded mt-3 md:mt-6 bg-black/75'
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <Table>
        <TableHeader className='font-munro text-lg md:text-xl'>
          <TableRow>
            <TableHead className='text-[#fcff18] text-center'>Name</TableHead>
            <TableHead className='text-[#fcff18] text-center'>
              College
            </TableHead>
            <TableHead className='text-[#fcff18] text-center'>Team</TableHead>
            <TableHead className='text-[#fcff18] text-center'>Age</TableHead>
            <TableHead className='text-[#fcff18] text-center'>Gender</TableHead>
            <TableHead className='text-[#fcff18] text-center'>Email</TableHead>
            <TableHead className='text-[#fcff18] text-center'>
              Phone No
            </TableHead>
            <TableHead className='text-[#fcff18] text-center'>
              Check In
            </TableHead>
            <TableHead className='text-[#fcff18] text-center'>
              Check Out
            </TableHead>
            <TableHead className='text-[#fcff18] text-center'>
              Confirmation Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((user: UserData) => (
            <TableRow key={user.leader_id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.college_name}</TableCell>
              <TableCell>{user.team_name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.member_mail}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.check_in_date}</TableCell>
              <TableCell>{user.check_out_date}</TableCell>
              <TableCell>{user.confirmation_status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProfilePage;
