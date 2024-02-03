import handleSubmit from '@/app/_actions/handleSubmit';
import { getServerAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function POST(req: Request) {
  const session = await getServerAuthSession();
  const data = await req.formData();
  console.log(data);
  console.log(
    req.headers
      .get('referer')
      ?.split('?')[1]
      .split('&')
      .map((s) => s.split('=')[1]),
  );
  const query = {
    length: Number(
      req.headers
        .get('referer')
        ?.split('?')[1]
        .split('&')
        .map((s) => s.split('=')[1])[2],
    ),
    leader_mail: session?.user?.email as string,
    check_in_date: Number(
      req.headers
        .get('referer')
        ?.split('?')[1]
        .split('&')
        .map((s) => s.split('=')[1])[0],
    ),
    check_out_date: Number(
      req.headers
        .get('referer')
        ?.split('?')[1]
        .split('&')
        .map((s) => s.split('=')[1])[1],
    ),
  };

  handleSubmit(query, data);
  redirect('/profile');
}
