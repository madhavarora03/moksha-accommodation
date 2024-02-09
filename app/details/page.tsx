import FormWrapper from '@/components/FormWrapper';
import { getServerAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
// import FormComponent from './FormComponent';

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

  if (session == null)
    redirect(`/signin?redirectTo=/details?${newParams.toString()}`);

  return (
    <FormWrapper>
      <p className='flex flex-row-reverse w-full text-black md:pr-2 pr-1 md:text-sm text-xs'>
        *Do mention as per College-ID
      </p>
    </FormWrapper>
  );
}
