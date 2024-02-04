'use server';

import { redirect } from 'next/navigation';

export default async function handleSubmit(
  query: {
    length: number;
    leader_mail: string;
    check_in_date: number;
    check_out_date: number;
  },
  formdata: FormData,
) {
  var arr = [];

  for (var index = 0; index < query.length; index++) {
    arr.push({
      leader_id: query.leader_mail,
      name: formdata.get(`${index}-name`) as string,
      phone: formdata.get(`${index}-phone`) as string,
      member_mail: formdata.get(`${index}-member-email`) as string,
      college_name: formdata.get(`${index}-college`) as string,
      gender: formdata.get(`${index}-gender`) as string,
      age: formdata.get(`${index}-age`) as string,
      team_name: formdata.get('team-name') as string,
      city: formdata.get(`${index}-city`) as string,
      state: formdata.get(`${index}-state`) as string,
      check_in_date: query.check_in_date,
      check_out_date: query.check_out_date,
      aadhar_link: formdata.get('aadhar-link') as string,
      college_id_link: formdata.get('college-id-link') as string,
      razorpay_payment_id: formdata.get('razorpay-payment-id') as string,
      razorpay_order_id: formdata.get('razorpay-order-id') as string,
      razorpay_signature: formdata.get('razorpay-signature') as string,
      amount: formdata.get('amount')?.slice(0, -2) as string,
    });
  }

  try {
    await fetch(
      'https://script.google.com/macros/s/AKfycbyQN13nT525DUVFflpwMrhXxl1OWPX2jP5XtFnzs-u6N32K_1LXLPJMn8OH7hmvxYm8OA/exec?action=addTeam',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: arr }),
      },
    );
  } catch (e: any) {
    alert(e.message);
  } finally {
    redirect('/profile');
  }
}
