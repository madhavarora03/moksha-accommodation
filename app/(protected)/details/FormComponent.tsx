'use client';

import { useState, type FormEvent } from 'react';
import { Session } from 'next-auth';
import { redirect, useSearchParams } from 'next/navigation';
import handleSubmit from '@/app/_actions/handleSubmit';
import createOrder from '@/app/_actions/createOrder';
import createTeamAndPay from '@/app/_actions/createTeamAndPay';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useFormStatus } from 'react-dom';
import RenderRazorpay from './RenderRazorpay';
import Image from 'next/image';

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

  const initialPersonState = {
    leader_id: leaderMail,
    college_name: '',
    team_name: '',
    member_mail: '',
    name: '',
    age: '',
    gender: '',
    phone: '',
    aadhar_number: '',
    check_in_date: params.checkIn,
    check_out_date: params.checkOut,
  };

  const [persons, setPersons] = useState(
    Array.from({ length: params.personCount }, () => ({
      ...initialPersonState,
    })),
  );

  if (
    params.checkIn < 4 ||
    params.checkOut != 10 ||
    params.personCount < 1 ||
    params.checkIn > 7 ||
    params.checkIn > params.checkOut
  ) {
    redirect('/');
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

  const formAction = handleSubmit.bind(null, {
    length: persons.length,
    leader_mail: leaderMail as string,
    check_in_date: params.checkIn,
    check_out_date: params.checkOut,
  });

  const [received, setReceived] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleButtonSubmit = async () => {
    const data = await fetch('/api/razorpay?amount=1000', {
      method: 'POST',
      cache: 'no-store',
    });
    const jsonData = await data.json();
    setOrderId(jsonData.id);
    setReceived(true);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setDisabled(true);
      await handleButtonSubmit();
      // await formAction();
    } catch (e) {
      console.log(`Error found: ${e}`);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <>
      {received && (
        <RenderRazorpay
          orderId={orderId}
          keyId={process.env.NEXT_PUBLIC_RAZORPAY_API_KEY ?? ''}
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
      <form onSubmit={handleFormSubmit}>
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
                placeholder='Aadhar No.'
                type='text'
                name={`${index}-aadhar`}
                value={person.aadhar_number}
                onChange={(e) =>
                  handleInputChange(index, 'aadhar_number', e.target.value)
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
        </div>
        <SubmitButton disabled={disabled} />
      </form>
      <button type='button' onClick={handleButtonSubmit}>
        Create an Order
      </button>
    </>
  );
};

const SubmitButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <button
      type='submit'
      className='px-4 py-2 rounded-lg bg-[#38b6ff] hover:bg-blue-600 text-white border-none cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed'
      disabled={disabled}
    >
      Submit
    </button>
  );
};

export default FormComponent;
