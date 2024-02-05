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
import Link from 'next/link';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';

export type UserData = {
  name: string;
  team_name: string;
  college_name: string;
  age: number;
  gender: string;
  member_mail: string;
  leader_id: string;
  phone: string;
  city: string;
  state: string;
  check_in_date: number;
  check_out_date: number;
  confirmation_status: boolean;
  mv_id: string;
};

const ProfilePage = async () => {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    redirect('/signin?redirectTo=/profile');
  }

  const {
    user: { email },
  } = session;

  const data = await fetch(
    `https://script.google.com/macros/s/${process.env.GOOGLE_APP_SCRIPT_DEPLOYMENT_ID}/exec?id=${email}`,
    {
      cache: 'no-store',
    },
  );
  const res = await data.json();
  const userData: UserData[] = res.data;
  if (userData.length === 0) {
    return (
      <div className='w-full text-center '>
        <h1>You are not registered yet.</h1>
        <Link href='/' className='hover:underline transition'>
          Register Now
        </Link>
      </div>
    );
  }

  return (
    <div
      className='mx-auto rounded mt-3 md:mt-6 bg-black/75'
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <Table>
        <TableHeader className=' text-lg md:text-xl'>
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
            <TableHead className='text-[#fcff18] text-center'>
              Innovision-ID
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((user: UserData) => (
            <TableRow key={user.leader_id} className='text-center'>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.college_name}</TableCell>
              <TableCell>{user.team_name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.member_mail}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.check_in_date}</TableCell>
              <TableCell>{user.check_out_date}</TableCell>
              <TableCell>
                {user.confirmation_status ? (
                  <span>
                    Confirmed
                    <DoneAllRoundedIcon className='text-green-500 ml-2' />
                  </span>
                ) : (
                  <span>
                    Pending Confirmation
                    <HourglassTopRoundedIcon className='text-red-600' />
                  </span>
                )}
              </TableCell>
              <TableCell>{user.mv_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProfilePage;
