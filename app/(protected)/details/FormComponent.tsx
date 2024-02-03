'use client';

import { useState, type FormEvent } from 'react';
import { Session } from 'next-auth';
import { useRouter, useSearchParams } from 'next/navigation';
// import handleSubmit from '@/app/_actions/handleSubmit';
// import createOrder from '@/app/_actions/createOrder';
// import createTeamAndPay from '@/app/_actions/createTeamAndPay';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useFormStatus } from 'react-dom';
import RenderRazorpay from './RenderRazorpay';
import Image from 'next/image';
import { NEXT_PUBLIC_RAZORPAY_API_KEY } from '@/config';

const FormComponent = ({ session }: { session: Session }) => {
  const leaderMail = session.user?.email as string;
  const searchParams = useSearchParams();

  const params = {
    checkIn: Number(searchParams.get('checkIn')),
    checkOut: Number(searchParams.get('checkOut')),
    personCount: Number(searchParams.get('personCount')),
  };

  const [aadharLink, setAadharLink] = useState('');
  const [collegeIdLink, setCollegeIdLink] = useState('');
  const [amount, setAmount] = useState(
    params.personCount *
      (params.checkIn === 4 || params.checkIn === 5 ? 4299 : 3499) *
      100,
  );

  const initialPersonState = {
    leader_id: leaderMail,
    college_name: '',
    team_name: '',
    member_mail: '',
    name: '',
    age: '',
    gender: '',
    phone: '',
    city: '',
    state: '',
    check_in_date: params.checkIn,
    check_out_date: params.checkOut,
    razorpay_payment_id: '',
    razorpay_order_id: '',
    razorpay_signature: '',
  };

  const [persons, setPersons] = useState(
    Array.from({ length: params.personCount }, () => ({
      ...initialPersonState,
    })),
  );
  const router = useRouter();
  if (
    params.checkIn < 4 ||
    params.checkOut != 10 ||
    params.personCount < 1 ||
    params.checkIn > 7 ||
    params.checkIn > params.checkOut
  ) {
    router.push('/hshshahsh');
  }

  const handleInputChange = (index: number, field: string, value: string) => {
    setPersons((prevPersons) => {
      const updatedPersons = [...prevPersons];
      updatedPersons[index] = {
        ...updatedPersons[index],
        [field]: value,
      };
      return updatedPersons;
    });
  };

  const handleTeamNameChange = (value: string) => {
    setPersons((prevPersons) => {
      const updatedPersons = [...prevPersons];
      updatedPersons[0] = {
        ...updatedPersons[0],
        team_name: value,
      };
      return updatedPersons;
    });
  };

  const handleRazorpayPayment = async (paymentId: string) => {
    setPersons((prevPersons) => {
      const updatedPersons = [...prevPersons];
      updatedPersons[0] = {
        ...updatedPersons[0],
        razorpay_payment_id: paymentId,
      };
      return updatedPersons;
    });
  };

  const handleRazorpayOrder = async (orderId: string) => {
    setPersons((prevPersons) => {
      const updatedPersons = [...prevPersons];
      updatedPersons[0] = {
        ...updatedPersons[0],
        razorpay_order_id: orderId,
      };
      return updatedPersons;
    });
  };

  const handleRazorpaySignature = async (signature: string) => {
    setPersons((prevPersons) => {
      const updatedPersons = [...prevPersons];
      updatedPersons[0] = {
        ...updatedPersons[0],
        razorpay_signature: signature,
      };
      return updatedPersons;
    });
  };

  // const formAction = handleSubmit.bind(null, {
  //   length: persons.length,
  //   leader_mail: leaderMail as string,
  //   check_in_date: params.checkIn,
  //   check_out_date: params.checkOut,
  // });

  const [received, setReceived] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleButtonSubmit = async () => {
    const data = await fetch(`/api/razorpay?amount=${amount}`, {
      method: 'POST',
      cache: 'no-store',
    });
    const jsonData = await data.json();
    setOrderId(jsonData.id);
    setReceived(true);
  };

  return (
    <>
      {received && (
        <RenderRazorpay
          orderId={orderId}
          amount={
            params.personCount *
            (params.checkIn === 4 || params.checkIn === 5 ? 4299 : 3499) *
            100
          }
          name={session.user?.name as string}
          email={leaderMail}
        />
      )}
      <h1 className='md:text-3xl font-retro py-3 md:py-6 text-center w-full text-xl flex justify-between items-center md:px-12'>
        <Image
          src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsMain/hang_3.png'
          alt=''
          height={100}
          width={100}
          className='inline invert -rotate-12 hover:rotate-0 transition-all duration-300 cursor-pointer mr-4 md:h-20 h-12 w-auto'
        />
        <span>Enter team details</span>
        <Image
          src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsMain/hang_1.png'
          alt=''
          height={100}
          width={100}
          className='inline invert rotate-12 hover:rotate-0 transition-all duration-300 cursor-pointer ml-4 md:h-20 h-12 w-auto'
        />
      </h1>
      <form action='/api/form' method='POST' id='user-form'>
        <div>
          <Label>
            Team Name:
            <Input
              className='my-2'
              type='text'
              name='team-name'
              value={persons[0].team_name}
              onChange={(e) => handleTeamNameChange(e.target.value)}
              required={true}
            />
          </Label>
        </div>
        {persons.map((person, index) => (
          <div key={index}>
            <Label>
              {persons.length === 1
                ? 'Enter your details:'
                : index === 0
                ? 'POC Details:'
                : `Member ${index} Details:`}
            </Label>
            <div className='flex flex-col md:flex-row gap-2 my-2'>
              <Input
                className='text-black'
                placeholder='Name'
                type='text'
                name={`${index}-name`}
                value={person.name}
                onChange={(e) =>
                  handleInputChange(index, 'name', e.target.value)
                }
                required={true}
              />
              <Input
                className='text-black'
                placeholder='Phone'
                type='text'
                value={person.phone}
                name={`${index}-phone`}
                onChange={(e) =>
                  handleInputChange(index, 'phone', e.target.value)
                }
                required={true}
              />
              <Input
                className='text-black'
                placeholder='Email'
                type='email'
                value={person.member_mail}
                name={`${index}-member-email`}
                onChange={(e) =>
                  handleInputChange(index, 'member_mail', e.target.value)
                }
                required={true}
              />
              <Input
                className='text-black'
                placeholder='College'
                type='text'
                value={person.college_name}
                name={`${index}-college`}
                onChange={(e) =>
                  handleInputChange(index, 'college_name', e.target.value)
                }
                required={true}
              />
              <Input
                className='text-black'
                placeholder='Gender'
                type='text'
                value={person.gender}
                name={`${index}-gender`}
                onChange={(e) =>
                  handleInputChange(index, 'gender', e.target.value)
                }
                required={true}
              />
              <Input
                className='text-black'
                placeholder='Age'
                type='text'
                name={`${index}-age`}
                value={person.age}
                onChange={(e) =>
                  handleInputChange(index, 'age', e.target.value)
                }
                required={true}
              />
              <Input
                className='text-black'
                placeholder='City'
                type='text'
                name={`${index}-city`}
                value={person.city}
                onChange={(e) =>
                  handleInputChange(index, 'city', e.target.value)
                }
                required={true}
              />
              <Input
                className='text-black'
                placeholder='State'
                type='text'
                name={`${index}-state`}
                value={person.state}
                onChange={(e) =>
                  handleInputChange(index, 'state', e.target.value)
                }
                required={true}
              />
            </div>
          </div>
        ))}
        <div>
          <Label>
            Enter Drive Link containing Aadhar Card details:
            <Input
              type='text'
              name='aadhar-link'
              value={aadharLink}
              onChange={(e) => setAadharLink(e.target.value)}
              className='my-2'
              required={true}
            />
          </Label>
          <Label>
            Enter Drive Link containing College ID Card details:
            <Input
              type='text'
              name='college-id-link'
              value={collegeIdLink}
              onChange={(e) => setCollegeIdLink(e.target.value)}
              className='my-2'
              required={true}
            />
          </Label>
          <Input
            type='hidden'
            name='razorpay-payment-id'
            id='razorpay-payment-id'
            value={persons[0].razorpay_payment_id}
            onChange={(e) => handleRazorpayPayment(e.target.value)}
          />
          <Input
            type='hidden'
            name='razorpay-order-id'
            id='razorpay-order-id'
            value={persons[0].razorpay_order_id}
            onChange={(e) => handleRazorpayOrder(e.target.value)}
          />
          <Input
            type='hidden'
            name='razorpay-signature'
            id='razorpay-signature'
            value={persons[0].razorpay_signature}
            onChange={(e) => handleRazorpaySignature(e.target.value)}
          />
          <Input type='hidden' name='amount' value={amount} />
        </div>
        {/* <SubmitButton disabled={disabled} /> */}
      </form>
      <button type='button' onClick={handleButtonSubmit}>
        Create an Order
      </button>
    </>
  );
};

// const SubmitButton = ({ disabled }: { disabled: boolean }) => {
//   return (
//     <button
//       type='submit'
//       className='px-4 py-2 rounded-lg bg-[#38b6ff] hover:bg-blue-600 shadow-[0_0_0_2px_#000] hover:text-white border-none cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed'
//       disabled={disabled}
//     >
//       Submit
//     </button>
//   );
// };

export default FormComponent;
