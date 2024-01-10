'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

const RegScreen: React.FC = () => {
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
    <div className='max-w-4xl mx-auto px-4'>
      <h1 className='text-[#BE922F] text-center py-6 md:py-8 text-4xl font-bold'>
        Registration Form
      </h1>

      <section className='bg-gray-100 py-6 md:py-8 px-4 md:px-8 rounded-lg shadow-lg'>
        <div className='mb-6'>
          <p className='text-lg md:text-xl font-semibold'>
            <span className='text-xl md:text-2xl font-semibold text-[#BE922F]'>
              *Charges:
            </span>{' '}
            ₹1000/- per head per night
          </p>
          <p className='text-lg md:text-xl font-semibold'>
            *Limited Availability
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-between mb-6'>
          {/* Check In */}
          <div className='w-full md:w-2/5 mb-4 md:mb-0'>
            <h2 className='text-[#BE922F] text-2xl md:text-3xl mb-2'>
              Check In
            </h2>
            <div className='flex justify-between'>
              {[5, 6, 7, 8].map((day) => (
                <button
                  key={`checkin-${day}`}
                  onClick={() => handleCheckIn(day)}
                  className={`btn-sm border text-[#02012b] rounded-md py-2 px-4 focus:outline-none ${
                    checkIn === day
                      ? 'bg-[#BE922F] text-white'
                      : 'bg-white hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Check Out */}
          <div className='w-full md:w-2/5'>
            <h2 className='text-[#BE922F] text-2xl md:text-3xl mb-2'>
              Check Out
            </h2>
            <div className='flex justify-between'>
              {[6, 7, 8, 9].map((day) => (
                <button
                  key={`checkout-${day}`}
                  onClick={() => handleCheckOut(day)}
                  className={`btn-sm border text-[#02012b] rounded-md py-2 px-4 focus:outline-none ${
                    checkOut === day
                      ? 'bg-[#BE922F] text-white'
                      : 'bg-white hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='flex items-center mb-6'>
          <h2 className='text-[#BE922F] text-2xl md:text-3xl mr-4'>
            No. of People
          </h2>
          <div className='flex items-center'>
            <button
              className='btn-sm border text-[#02012b] rounded-md py-2 px-4 focus:outline-none'
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
            <span className='bg-gray-200 px-4 py-2 text-[#02012b]'>
              {personCount}
            </span>
            <button
              className='btn-sm border text-[#02012b] rounded-md py-2 px-4 focus:outline-none'
              onClick={() => setPersonCount(personCount + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className='flex flex-col items-center mb-6'>
          <span className='text-2xl font-semibold text-[#BE922F]'>
            Total: ₹{personCount * (checkOut - checkIn) * 1000}
          </span>
          <button
            className='btn border text-[#02012b] rounded-md py-2 px-6 mt-4 focus:outline-none hover:bg-[#BE922F] hover:text-white'
            onClick={submitHandler}
          >
            Continue
          </button>
        </div>
      </section>

      <section className='mt-8'>
        <h4 className='text-[#BE922F] text-2xl mb-4'>Accommodation Policy:</h4>
        <div className='text-lg'>
          <p className='mb-4'>
            <span className='font-semibold text-[#BE922F]'>
              Accommodation Charges:
            </span>{' '}
            Accommodation charges are ₹1000 per candidate per day...
          </p>
          <p className='mb-4'>
            <span className='font-semibold text-[#BE922F]'>Timing:</span> Check
            in: check in starts at 9 AM...
          </p>
          <p className='mb-4'>
            <span className='font-semibold text-[#BE922F]'>
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
