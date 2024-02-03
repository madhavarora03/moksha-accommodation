import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/lib/auth';
import FormComponent from './FormComponent';

type UserData = {
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
};

export default async function DetailsPage() {
  const session = await getServerAuthSession();

  if (session == null) {
    redirect('/signin');
  }

  return (
    <div className='w-screen'>
      <div
        className='mx-auto px-4 my-3 md:my-6 bg-[#34cc98] shadow-[0_0_0_2px_#000,8px_8px_0_0_#38b6ff] py-6 md:py-8 text-black w-4/5 md:w-10/12'
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <FormComponent session={session} />
      </div>
    </div>
  );
}
