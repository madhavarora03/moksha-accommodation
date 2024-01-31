'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

const RegScreen = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [personCount, setPersonCount] = useState(1);
  const [checkIn, setCheckIn] = useState(5);
  const [checkOut, setCheckOut] = useState(6);

  const handleCheckIn = (selectedCheckIn: number) => {
    if (selectedCheckIn < checkOut) {
      setCheckIn(selectedCheckIn);
    } else {
      toast({
        title: 'Check-in must be before check-out',
        variant: 'destructive',
        className: 'font-retro',
      });
    }
  };

  const handleCheckOut = (selectedCheckOut: number) => {
    if (selectedCheckOut > checkIn) {
      setCheckOut(selectedCheckOut);
    } else {
      toast({
        title: 'Check-out must be after check-in',
        variant: 'destructive',
        className: 'font-retro',
      });
    }
  };

  const submitHandler = () => {
    router.push(
      `/details?checkIn=${checkIn}&checkOut=${checkOut}&personCount=${personCount}`
    );
  };

  return (
    <div
      className='max-w-4xl mx-auto px-4 rounded-2xl mt-3 md:mt-6 bg-[#f60] shadow-[0_0_0_2px_#000,8px_8px_0_0_#34cc98]'
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <h1 className='text-black text-center py-6 md:py-8 text-4xl font-bold font-retro tracking-tighter'>
        Registration Form
      </h1>

      <Card className='dark'>
        <CardHeader>
          <p className='font-semibold font-retro flex items-center'>
            <span className='text-xl md:text-2xl font-semibold text-[#fcff18] font-munro mr-2'>
              *Charges:
            </span>
            ₹1000/- per head per night
          </p>
          <p className='font-semibold font-munro'>*Limited Availability</p>
        </CardHeader>

        <CardContent className='md:flex block md:justify-between'>
          {/* Check In */}
          <div className='w-full md:w-2/5 mb-4 md:mb-0'>
            <h2 className='text-[#fcff18] text-2xl md:text-3xl mb-2 font-retro'>
              Check In
            </h2>
            <div className='flex justify-between'>
              {[5, 6, 7, 8].map((day) => (
                <button
                  key={`checkin-${day}`}
                  onClick={() => handleCheckIn(day)}
                  className={`btn-sm border rounded-md py-2 px-4 focus:outline-none font-munro ${
                    checkIn === day
                      ? 'bg-[#ffe719] border-white font-extrabold text-black'
                      : 'bg-transparent hover:bg-gray-900 border-white'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Check Out */}
          <div className='w-full md:w-2/5'>
            <h2 className='text-[#fcff18] text-2xl md:text-3xl mb-2 font-retro'>
              Check Out
            </h2>
            <div className='flex justify-between'>
              {[6, 7, 8, 9].map((day) => (
                <button
                  key={`checkout-${day}`}
                  onClick={() => handleCheckOut(day)}
                  className={`btn-sm border rounded-md py-2 px-4 focus:outline-none font-munro ${
                    checkOut === day
                      ? 'bg-[#ffe719] border-white font-extrabold text-black'
                      : 'bg-transparent hover:bg-gray-900 border-white'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <h2 className='text-[#fcff18] text-2xl md:text-3xl mr-4 font-munro'>
            No. of People
          </h2>
          <div className='flex items-center'>
            <button
              className='border text-[#02012b] bg-gray-200 hover:bg-[#ffe719] font-retro rounded-md py-2 px-4 focus:outline-none'
              onClick={() => {
                if (personCount > 1) setPersonCount(personCount - 1);
                if (personCount === 1) {
                  toast({
                    title: 'Minimum 1 person is required',
                    variant: 'destructive',
                    className: 'font-retro',
                  });
                }
              }}
            >
              -
            </button>
            <span className='bg-transparent px-4 py-2 font-retro text-[#fcff18] text-3xl'>
              {personCount}
            </span>
            <button
              className='border text-[#02012b] bg-gray-200 hover:bg-[#ffe719] font-retro rounded-md py-2 px-4 focus:outline-none'
              onClick={() => setPersonCount(personCount + 1)}
            >
              +
            </button>
          </div>
        </CardFooter>

        <div className='flex flex-col items-center mb-6'>
          <span className='text-2xl font-semibold text-[#fcff18] font-retro tracking-tighter'>
            Total:{' '}
            <span className='text-white text-3xl tracking-wider'>
              ₹{personCount * (checkOut - checkIn) * 1000}
            </span>
          </span>
          <button
            className='border rounded-md py-2 px-6 mt-4 focus:outline-none font-munro tracking-wider text-2xl text-[#fcff18] bg-gray-900 hover:bg-gray-800 hover:text-white'
            onClick={submitHandler}
          >
            Continue
          </button>
        </div>
      </Card>

      <section className='mt-8 py-3'>
        <h4 className='text-black text-xl md:text-2xl mb-4 font-retro'>
          Accommodation Policy:
        </h4>
        <div className='md:text-lg'>
          <p className='mb-4 text-black'>
            <span className='font-semibold font-munro md:text-xl text-lg'>
              Accommodation Charges:
            </span>{' '}
            Accommodation charges are ₹1000 per candidate per day...
          </p>
          <p className='mb-4 text-black'>
            <span className='font-semibold font-munro md:text-xl text-lg'>
              Timing:
            </span>{' '}
            Check in: check in starts at 9 AM...
          </p>
          <p className='mb-4 text-black'>
            <span className='font-semibold font-munro md:text-xl text-lg'>
              Cancellation Policy:
            </span>{' '}
            Confirmed Accommodation cannot be canceled...
          </p>
        </div>
      </section>
    </div>
  );
};

export default RegScreen;
