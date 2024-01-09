import { getServerAuthSession } from '@/utils/auth';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  if (session == null) {
    redirect('/signin');
  }
  return <>{children}</>;
}
