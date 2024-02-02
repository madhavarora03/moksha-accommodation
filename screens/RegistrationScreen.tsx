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
import flappyBird from '@/assets/favicon.svg';
import Image from 'next/image';
import './Animation.css';

const RegScreen = () => {
  const { toast } = useToast();
  const router = useRouter();

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
      `/details?checkIn=${checkIn}&checkOut=${checkOut}&personCount=${personCount}`,
    );
  };

  return (
    <div
      className='max-w-4xl mx-auto px-4 mt-3 md:mt-6 bg-[#8c52ff] rounded-md shadow-[0_0_30px_5px_#38b6ff] my-4'
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <h1 className='text-[#fcff18] text-center py-6 md:py-8 text-4xl font-bold font-retro tracking-tighter relative'>
        <Image
          src={flappyBird}
          alt='Flappy Bird'
          className='inline cursor-pointer absolute bottom-6 object md:left-1/4 left-0 -scale-x-100 md:h-10 md:w-10 h-8 w-8'
        />
        Book Now!
        <Image
          src={flappyBird}
          alt='Flappy Bird'
          className='inline cursor-pointer absolute bottom-6 object md:right-1/4 right-0 md:h-10 md:w-10 h-8 w-8'
        />
      </h1>

      <Card className='bg-[#ff2c96] shadow-[0_0_0_2px_#000,-8px_8px_0_0_#f9e100] border-none rounded-none'>
        <CardHeader>
          {/* <p className="font-semibold font-retro flex items-center">
            <span className="text-xl md:text-2xl font-semibold text-[#fcff18] font-munro mr-2">
              *Charges:
            </span>
            ₹1000/- per head per night
          </p> */}
          <p className='font-semibold font-munro text-black text-right'>
            *Limited Availability
          </p>
        </CardHeader>

        <CardContent className='md:flex block md:justify-between'>
          {/* Check In */}
          <div className='w-full md:w-2/5 mb-4 md:mb-0'>
            <h2 className='text-[#fcff18] text-2xl md:text-3xl mb-2 font-retro'>
              Check In
            </h2>
            <div className='flex justify-between'>
              {[4, 5, 6, 7].map((day) => (
                <button
                  key={`checkin-${day}`}
                  onClick={() => handleCheckIn(day)}
                  className={`btn-sm border rounded-md py-2 px-4 focus:outline-none font-munro ${
                    checkIn === day
                      ? 'bg-[#ffe719] border-black font-extrabold text-black'
                      : 'bg-white border-black'
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
              {[10].map((day) => (
                <button
                  key={`checkout-${day}`}
                  onClick={() => handleCheckOut(day)}
                  className={`btn-sm border rounded-md py-2 px-4 focus:outline-none font-munro ${
                    checkOut === day
                      ? 'bg-[#ffe719] border-black font-extrabold text-black'
                      : 'bg-white border-black'
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
              className='border border-black text-[#02012b] bg-gray-200 hover:bg-[#ffe719] font-retro rounded-md py-2 px-4 focus:outline-none'
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
              className='border border-black text-[#02012b] bg-gray-200 hover:bg-[#ffe719] font-retro rounded-md py-2 px-4 focus:outline-none'
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
              ₹{personCount * (checkIn === 4 || checkIn === 5 ? 4299 : 3499)}
            </span>
          </span>
          <button
            className='border-2 border-black rounded-md py-2 px-6 focus:outline-none font-munro tracking-wider text-2xl text-[#fcff18] bg-[#38b6ff] my-4 font-semibold'
            onClick={submitHandler}
          >
            Continue
          </button>
        </div>
      </Card>

      <section className='mt-8 py-3'>
        <h4 className='text-[#fcff18] text-xl md:text-2xl mb-4 font-retro'>
          Accommodation Policy:
        </h4>
        <div className='md:text-lg'>
          <p className='mb-4 text-black'>
            <span className='text-[#fcff18] font-semibold font-munro md:text-xl text-lg'>
              Accommodation Charges:
            </span>{' '}
            Accommodation charges are ₹1000 per candidate per day...
          </p>
          <p className='mb-4 text-black'>
            <span className='text-[#fcff18] font-semibold font-munro md:text-xl text-lg'>
              Timing:
            </span>{' '}
            Check in: check in starts at 9 AM...
          </p>
          <p className='mb-4 text-black'>
            <span className='text-[#fcff18] font-semibold font-munro md:text-xl text-lg'>
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
