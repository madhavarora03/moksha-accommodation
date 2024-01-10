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
  check_in_date: number;
  check_out_date: number;
  confirmation_status: boolean;
};

export default async function DetailsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect('/signin');
  }

  return (
    <div>
      <FormComponent session={session} />
    </div>
  );
}
