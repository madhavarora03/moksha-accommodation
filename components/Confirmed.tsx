'use client';

import type { UserData } from '@/app/(main)/profile/page';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import Image from 'next/image';

export default function Confirmed({ user }: { user: UserData }) {
  return (
    <Dialog>
      <DialogTrigger className='underline'>
        Confirmed
        <DoneAllRoundedIcon className='text-green-500 ml-2' />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Image
              src='/logo.png'
              alt='Receipt'
              width={2000}
              height={2000}
              className='px-4 invert'
            />
          </DialogTitle>
          <DialogDescription className='text-center'>
            <h1 className='text-xl font-bold'>Confirmation for {user.mv_id}</h1>
            <h2 className='text-lg font-semibold'>
              {user.name} (Team: {user.team_name})
            </h2>
            <p>
              {user.age} years, {user.gender}
            </p>
            <p>{user.college_name}</p>
            <p>
              {user.check_in_date} March - {user.check_out_date} March
            </p>
            <p>Email: {user.member_mail}</p>
            <p>Phone Number: {user.phone}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
