'use server';

import handleSubmit from './handleSubmit';
import createOrder from './createOrder';

export default async function createTeamAndPay(
  query: {
    length: number;
    leader_mail: string;
    check_in_date: number;
    check_out_date: number;
  },
  formdata: FormData,
) {
  console.log('started');
  const orderId = await createOrder(
    query.length *
      (query.check_in_date === 4 || query.check_in_date === 5 ? 4299 : 3499),
  );
  console.log(orderId);
  return;

  // await handleSubmit(query, formdata);
}
