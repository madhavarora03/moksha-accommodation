'use client';

import RenderRazorpay from '@/app/(main)/details/RenderRazorpay';
import { calcAmount } from '@/lib/amountUtility';
import { Session } from 'next-auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useToast } from './ui/use-toast';

type RazorpayState = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

export default function FormCarousel({ session }: { session: Session }) {
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
      // Check empty array
      if (
        persons.some((person) =>
          Object.values(person).some((value) => value === ''),
        )
      ) {
        toast({
          title: 'All fields are required',
          variant: 'destructive',
          className: '',
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
      <form
        action='/api/form'
        method='POST'
        id='user-form'
        className='w-full flex flex-col justify-center items-center space-y-1.5 p-4 '
      >
        <div className='max-w-full dark text-white'>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className='w-full h-full flex gap-12 justify-center items-center flex-col tracking-widest'>
                  <Label
                    htmlFor='team-name'
                    className='relative text-[#00D2CD] text-6xl md:text-8xl text-center'
                  >
                    Team Name
                    <span className='absolute -top-[6px] -left-[4px] w-full text-[#FFFFFF]'>
                      Team Name
                    </span>
                    <span className='absolute -top-[10px] -left-[6px] w-full text-[#FFED00]'>
                      Team Name
                    </span>
                  </Label>
                  <Input
                    type='text'
                    name='team-name'
                    value={persons[0].team_name}
                    onChange={(e) => handleTeamNameChange(e.target.value)}
                    required={true}
                    className='w-auto md:w-1/2 mx-auto md:mx-0'
                    placeholder='Enter your team name here...'
                  />
                </div>
              </CarouselItem>
              {persons.map((person, index) => {
                return (
                  <CarouselItem key={index + 1}>
                    <div className='md:flex w-full justify-center md:gap-24 items-center text-center my-2'>
                      <Label className='relative'>
                        Member-{index + 1}
                        <span className='absolute -top-[2px] -left-[1px] w-full text-[#9E46A8]'>
                          Member-{index + 1}
                        </span>
                      </Label>
                    </div>
                    <div className='w-3/4 mx-auto flex space-y-1.5 flex-col my-3'>
                      <Input
                        className='md:w-3/4 mx-auto'
                        placeholder='Name...'
                        type='text'
                        name={`${index}-name`}
                        value={person.name}
                        onChange={(e) =>
                          handleInputChange(index, 'name', e.target.value)
                        }
                        required={true}
                      />
                      <Input
                        className='md:w-3/4 mx-auto'
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
                        className='md:w-3/4 mx-auto'
                        placeholder='Email'
                        type='email'
                        value={person.member_mail}
                        name={`${index}-member-email`}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            'member_mail',
                            e.target.value,
                          )
                        }
                        required={true}
                      />
                      <Input
                        className='md:w-3/4 mx-auto'
                        placeholder='College'
                        type='text'
                        value={person.college_name}
                        name={`${index}-college`}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            'college_name',
                            e.target.value,
                          )
                        }
                        required={true}
                      />
                      <Input
                        className='md:w-3/4 mx-auto'
                        placeholder='Gender'
                        type='hidden'
                        value={person.gender}
                        name={`${index}-gender`}
                        onChange={(e) =>
                          handleInputChange(index, 'gender', e.target.value)
                        }
                        required={true}
                      />
                      <div className='w-full md:w-3/4 mx-auto'>
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
                      </div>
                      <Input
                        className='md:w-3/4 mx-auto'
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
                        className='md:w-3/4 mx-auto'
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
                        className='md:w-3/4 mx-auto'
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
                  </CarouselItem>
                );
              })}
              <CarouselItem>
                <div className='p-4 md:p-10 flex items-center justify-center flex-col w-full h-full'>
                  <Label className='text-xl'>
                    Enter Drive Link containing Aadhar Card details:
                    <Input
                      type='text'
                      name='aadhar-link'
                      className='my-2 w-full'
                      required
                    />
                  </Label>
                  <Label className='text-xl'>
                    Enter Drive Link containing College ID Card details:
                    <Input
                      type='text'
                      name='college-id-link'
                      className='my-2'
                      required
                    />
                  </Label>
                  <button
                    disabled={disabled}
                    type='button'
                    onClick={handleButtonSubmit}
                    className='md:text-4xl text-2xl leading-6 font-bold mt-2 font-upheavtt bg-[#FFED00] md:px-12 px-2 rounded-2xl text-[#000000] relative md:tracking-widest tracking-wider shadow-[2px_2px_0_0_#FFF,4px_4px_0_0_#00D2CD] block py-3 md:py-6 mb-12 md:mb-6'
                  >
                    Pay and confirm
                    <span className='absolute md:top-[22px] md:-left-[2px] top-[11px] -left-[1px] w-full text-[#9E46A8] md:px-12 px-2'>
                      Pay and confirm
                    </span>
                  </button>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className='w-full flex items-center justify-center gap-3'>
              <CarouselPrevious type='button' />
              <CarouselNext type='button' />
            </div>
          </Carousel>
        </div>
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
      </form>
    </>
  );
}
