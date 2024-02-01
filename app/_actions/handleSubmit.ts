'use server';

import { redirect } from 'next/navigation';

export default async function handleSubmit(
  query: {
    length: number;
    leader_mail: string;
    check_in_date: number;
    check_out_date: number;
  },
  formdata: FormData
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
      check_in_date: query.check_in_date,
      check_out_date: query.check_out_date,
    });
  }

  // console.log(arr);
  try {

    // const payment = 

    const data = await fetch(
      'https://script.google.com/macros/s/AKfycbyj0WYvmQP6w1GGgSYkBrpPY6srRSUMZtndwltu3BGBOeCPWtiBOdcdSb6wVZ3dl1YJGQ/exec?action=addTeam',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: arr }),
      }
    );
    // console.log(data);
  } catch (e: any) {
    console.log(e.message);
  } finally {
    redirect('/profile');
  }
}
