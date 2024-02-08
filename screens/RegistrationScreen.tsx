'use client';

import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import { calcAmount } from '@/lib/amount';

const RegScreen = () => {
  const { toast } = useToast();

  const [personCount, setPersonCount] = useState(1);
  const [checkIn, setCheckIn] = useState(4);
  const [checkOut, setCheckOut] = useState(10);

  const handleCheckIn = (selectedCheckIn: number) => {
    if (selectedCheckIn < checkOut) {
      setCheckIn(selectedCheckIn);
    } else {
      toast({
        title: 'Check-in must be before check-out',
        variant: 'destructive',
        className: '',
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
        className: '',
      });
    }
  };

  return (
    <div className='max-w-4xl mx-auto px-4 mt-3 md:mt-6 bg-[#9b5ce5] shadow-[0_0_25px_0_#000] rounded-md my-4'>
      <h1 className='text-black text-center py-6 md:py-8 text-4xl font-bold tracking-tighter relative'>
        Book Now!
      </h1>
      <Card className='bg-[#ff2c96] shadow-[0_0_0_2px_#000,-8px_8px_0_0_#38b6ff] border-none rounded-none'>
        <CardHeader>
          <p className='font-semibold  text-black text-right'>
            *Limited Availability
          </p>
        </CardHeader>

        <CardContent className='md:flex block md:justify-between'>
          {/* Check In */}
          <div className='w-full md:w-2/5 mb-4 md:mb-0'>
            <h2 className='text-black text-2xl md:text-3xl mb-2 '>Check In</h2>
            <div className='flex justify-between'>
              {[4, 5, 6, 7].map((day) => (
                <button
                  key={`checkin-${day}`}
                  onClick={() => handleCheckIn(day)}
                  className={`btn-sm border rounded-md py-2 px-4 focus:outline-none  ${
                    checkIn === day
                      ? 'bg-[#ffe719] border-black font-extrabold text-black'
                      : 'bg-white border-black hover:bg-[#ffe719]'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Check Out */}
          <div className='w-full md:w-2/5'>
            <h2 className='text-black text-2xl md:text-3xl mb-2 '>Check Out</h2>
            <div className='flex md:gap-14 gap-12'>
              {[10, 11].map((day) => (
                <button
                  key={`checkout-${day}`}
                  onClick={() => handleCheckOut(day)}
                  className={`btn-sm border rounded-md py-2 px-4 focus:outline-none  ${
                    checkOut === day
                      ? 'bg-[#ffe719] border-black font-extrabold text-black'
                      : 'bg-white border-black hover:bg-[#ffe719]'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <h2 className='text-black text-2xl md:text-3xl mr-4 '>
            No. of People
          </h2>
          <div className='flex items-center'>
            <button
              className='border border-black text-[#02012b] bg-gray-200 hover:bg-[#ffe719]  rounded-md py-2 px-4 focus:outline-none'
              onClick={() => {
                if (personCount > 1) setPersonCount(personCount - 1);
                if (personCount === 1) {
                  toast({
                    title: 'Minimum 1 person is required',
                    variant: 'destructive',
                    className: '',
                  });
                }
              }}
            >
              -
            </button>
            <span className='bg-transparent px-4 py-2  text-black text-3xl'>
              {personCount}
            </span>
            <button
              className='border border-black text-[#02012b] bg-gray-200 hover:bg-[#ffe719]  rounded-md py-2 px-4 focus:outline-none'
              onClick={() => setPersonCount(personCount + 1)}
            >
              +
            </button>
          </div>
        </CardFooter>

        <div className='flex flex-col items-center mb-6'>
          <span className='text-2xl font-semibold text-black  tracking-tighter'>
            Total:{' '}
            <span className='text-white text-3xl tracking-wider'>
              ₹{calcAmount(checkIn, checkOut, personCount)}/-
            </span>
          </span>
          <button className='border-2 border-black rounded-md py-2 px-6 focus:outline-none  tracking-wider text-2xl text-black bg-[#38b6ff] my-4 font-semibold'>
            <Link
              href={`/details?checkIn=${checkIn}&checkOut=${checkOut}&personCount=${personCount}`}
              prefetch={false}
            >
              Continue
            </Link>
          </button>
        </div>
      </Card>

      <section className='mt-8 py-3'>
        <h4 className='text-black text-xl md:text-2xl mb-4 '>
          Accommodation Policy:
        </h4>
        <div className='md:text-lg'>
          <p className='mb-4 text-black'>
            <span className='text-black font-semibold  md:text-xl text-lg'>
              Accommodation Charges:
            </span>{' '}
            Accommodation charges are ₹1000 per candidate per day...
          </p>
          <p className='mb-4 text-black'>
            <span className='text-black font-semibold  md:text-xl text-lg'>
              Timing:
            </span>{' '}
            Check in: check in starts at 9 AM...
          </p>
          <p className='mb-4 text-black'>
            <span className='text-black font-semibold  md:text-xl text-lg'>
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
