'use client';

import { Session } from 'next-auth';
import { useSearchParams } from 'next/navigation';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';

export default function FormComponent({ session }: { session: Session }) {
  const leaderMail = session.user?.email as string;
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const params = {
    checkIn: searchParams.get('checkIn'),
    checkOut: searchParams.get('checkOut'),
    personCount: searchParams.get('personCount'),
  };

  return (
    <form
      action='/api/form'
      method='POST'
      id='user-form'
      className='w-full flex flex-col space-y-1.5 p-4'
    >
      <div className='md:flex w-full justify-center md:gap-24 items-center'>
        <Label htmlFor='team-name' className='relative'>
          Team Name
          <span className='absolute -top-[2px] -left-[1px] w-full text-[#9E46A8]'>
            Team Name
          </span>
        </Label>
        <Input type='text' id='team-name' className='w-auto mx-auto md:mx-0' />
      </div>
      <div className='md:flex w-full justify-center md:gap-24 items-center'>
        <Label htmlFor='team-name' className='relative'>
          Member-1
          <span className='absolute -top-[2px] -left-[1px] w-full text-[#9E46A8]'>
            Member-1
          </span>
        </Label>
      </div>
      <div className='w-3/4 mx-auto flex space-y-1.5 md:space-x-2 md:space-y-0 flex-col md:flex-row'>
        <Input
          type='text'
          id='team-name'
          className=' mx-auto md:mx-0'
          placeholder='Name...'
        />
        <Input
          type='text'
          id='team-name'
          className=' mx-auto md:mx-0'
          placeholder='Mobile No...'
        />
        <Input
          type='text'
          id='team-name'
          className=' mx-auto md:mx-0'
          placeholder='Email...'
        />
        <Input
          type='text'
          id='team-name'
          className=' mx-auto md:mx-0'
          placeholder='College Name...'
        />
        <Input
          type='text'
          id='team-name'
          className=' mx-auto md:mx-0'
          placeholder='Gender...'
        />
        <Input
          type='text'
          id='team-name'
          className=' mx-auto md:mx-0'
          placeholder='Age...'
        />
        <Input
          type='text'
          id='team-name'
          className=' mx-auto md:mx-0'
          placeholder='City...'
        />
        <Input
          type='text'
          id='team-name'
          className=' mx-auto md:mx-0'
          placeholder='State...'
        />
      </div>
    </form>
  );
}
