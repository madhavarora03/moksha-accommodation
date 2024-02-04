import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/lib/auth';
import FormComponent from './FormComponent';
import { signIn } from 'next-auth/react';

export default async function DetailsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerAuthSession();
  const newParams = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (value === undefined) {
      newParams.delete(key);
    } else {
      newParams.set(key, String(value));
    }
  }
  
  if (session == null) redirect(`/signin?redirectTo=/details?${newParams.toString()}`);

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
