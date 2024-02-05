'use client';

import { useState } from 'react';
import { Session } from 'next-auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import RenderRazorpay from './RenderRazorpay';
import Image from 'next/image';
import { useToast } from '@/components/ui/use-toast';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { calcAmount } from '@/lib/amount';

const FormComponent = ({ session }: { session: Session }) => {
  const leaderMail = session.user?.email as string;
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const params = {
    checkIn: Number(searchParams.get('checkIn')),
    checkOut: Number(searchParams.get('checkOut')),
    personCount: Number(searchParams.get('personCount')),
  };

  const [aadharLink, setAadharLink] = useState('');
  const [collegeIdLink, setCollegeIdLink] = useState('');
  const [amount, setAmount] = useState(
    (calcAmount(
      params.checkIn,
      params.checkOut,
      params.personCount,
    ) as number) * 100,
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
    razorpay_payment_id: 'test',
    razorpay_order_id: 'test',
    razorpay_signature: 'test',
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
    router.push('/');
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
      updatedPersons.forEach((person) => {
        person.team_name = value;
      });
      // updatedPersons[0] = {
      //   ...updatedPersons[0],
      //   team_name: value,
      // };
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

  const [received, setReceived] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleButtonSubmit = async () => {
    try {
      setDisabled(true);
      console.log(persons);
      // Check empty array
      if (
        persons.some((person) =>
          Object.values(person).some((value) => value === ''),
        )
      ) {
        toast({
          title: 'All fields are required',
          variant: 'destructive',
          className: 'font-retro',
        });
        return;
      }
      const data = await fetch(`/api/razorpay?amount=${amount}`, {
        method: 'POST',
        cache: 'no-store',
      });
      const jsonData = await data.json();
      setOrderId(jsonData.id);
      setReceived(true);
    } catch (e: any) {
      alert(e);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <>
      {received && (
        <RenderRazorpay
          orderId={orderId}
          amount={
            (calcAmount(
              params.checkIn,
              params.checkOut,
              params.personCount,
            ) as number) * 100
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
            <div className='flex flex-col md:flex-row gap-2 my-2 text-sm font-medium leading-none'>
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
                type='hidden'
                value={person.gender}
                name={`${index}-gender`}
                onChange={(e) =>
                  handleInputChange(index, 'gender', e.target.value)
                }
                required={true}
              />
              <Select
                onValueChange={(value) => {
                  handleInputChange(index, 'gender', value);
                }}
                required={true}
              >
                <SelectTrigger>
                  <SelectValue placeholder='Select your gender' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='male'>Male</SelectItem>
                  <SelectItem value='female'>Female</SelectItem>
                  <SelectItem value='other'>Other</SelectItem>
                </SelectContent>
              </Select>
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
      {disabled ? (
        <Spinner />
      ) : (
        <button
          type='button'
          onClick={handleButtonSubmit}
          className='mt-2 px-4 py-2 rounded-lg bg-[#38b6ff] hover:bg-blue-600 shadow-[0_0_0_2px_#000] hover:text-white border-none cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed transition font-munro duration-50 text-xl'
        >
          Pay Now and Submit
        </button>
      )}
    </>
  );
};

function Spinner() {
  return (
    <div role='status'>
      <svg
        aria-hidden='true'
        className='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
        viewBox='0 0 100 101'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
          fill='currentColor'
        />
        <path
          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
          fill='currentFill'
        />
      </svg>
      <span className='sr-only'>Loading...</span>
    </div>
  );
}

export default FormComponent;
