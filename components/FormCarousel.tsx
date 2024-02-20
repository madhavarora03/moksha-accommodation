'use client';

import RenderRazorpay from '@/app/(main)/details/RenderRazorpay';
import { calcAmount } from '@/lib/amountUtility';
import { Session } from 'next-auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import Spinner from './Spinner';
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

  const [promo, setPromo] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>('');
  const promoRef = useRef<HTMLInputElement>(null);
  const actualRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

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
    params.checkOut < 10 ||
    params.checkOut > 11 ||
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
        ) ||
        !aadharLink ||
        !collegeIdLink
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

  const handlePromoChange = async () => {
    try {
      setPromo(true);
      const promoValue = promoRef.current?.value;
      if (!promoValue) {
        setPromo(false);
        throw new Error('Promo Code must be entered');
      }
      setLoading(true);
      const data = await fetch('https://moksha-9bmv.onrender.com/findCL', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: leaderMail }),
        method: 'POST',
      });
      const jsonData = await data.json();
      console.log(jsonData, promoValue);
      setLoading(false);
      if (jsonData.message === '0') {
        toast({
          title: 'You must login as a Contingent Leader!',
          variant: 'destructive',
        });
        promoRef.current.value = '';
        setPromoCode('');
        setPromo(false);
      } else {
        if (jsonData.message === promoValue) {
          if (params.personCount < 8) {
            toast({
              title: 'Promo Code is only applicable for 8 or more members!',
              variant: 'destructive',
            });
            promoRef.current.value = '';
            setPromo(false);
            return;
          }
          setPromoCode(promoValue);
          toast({
            title: 'Promo Code Applied Successfully!',
          });
          promoRef.current.disabled = true;
          setAmount((old) => (90 * old) / 100);
        } else {
          toast({
            title: 'Invalid Promo Code!',
            variant: 'destructive',
          });
          setPromo(false);
        }
      }
    } catch (e: any) {
      alert(e);
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
              <CarouselItem className='flex items-center justify-center flex-col space-y-2'>
                <Input type='hidden' name='amount' value={amount} />
                <Label className='relative tracking-widest text-[#00D2CD] text-2xl md:text-5xl text-center'>
                  Current Amount: {amount / 100}
                  <span className='absolute tracking-widest md:-top-[6px] -top-[3px] md:-left-[4px] -left-[2px] w-full text-[#FFFFFF]'>
                    Current Amount: {amount / 100}
                  </span>
                </Label>
                <Label className='relative tracking-wider text-[#FFFFFF] text-2xl md:text-5xl text-center'>
                  <span className='absolute tracking-wider md:-top-[2px] -top-[1px] md:-left-[2px] -left-[1px] w-full text-[#FFED00]'>
                    Do you Have a Code?
                  </span>
                  Do you Have a Code?
                </Label>
                <div className='flex flex-col gap-4 md:gap-0 md:flex-row w-full max-w-sm items-center space-x-2'>
                  <Input
                    type='text'
                    placeholder='Enter Code Here..'
                    className='font-bold'
                    ref={promoRef}
                  />
                  <Input
                    type='hidden'
                    ref={actualRef}
                    name='promocode'
                    // disabled
                    value={promoCode}
                  />
                  {loading ? (
                    <Spinner />
                  ) : (
                    <button
                      type='button'
                      disabled={promo}
                      onClick={handlePromoChange}
                      className='bg-[#FFED00] relative  px-3 font-extrabold font-upheavtt tracking-wider rounded-2xl text-xl shadow-[2px_2px_0_0_#FFF,4px_4px_0_0_#00D2CD] disabled:bg-[#FFFFFF]'
                    >
                      Validate
                      <span className='absolute font-extrabold text-[#9E46A8] top-1/2 -translate-y-[51%] left-1/2 -translate-x-[51%]'>
                        Validate
                      </span>
                    </button>
                  )}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className='w-full h-full flex gap-12 justify-center items-center flex-col tracking-widest'>
                  <Label
                    htmlFor='team-name'
                    className='relative text-[#00D2CD] text-6xl md:text-8xl text-center'
                  >
                    Team Name
                    <span className='absolute md:-top-[6px] -top-[3px] md:-left-[4px] -left-[2px] w-full text-[#FFFFFF]'>
                      Team Name
                    </span>
                    <span className='absolute md:-top-[10px] -top-[5px] md:-left-[6px] -left-[3px] w-full text-[#FFED00]'>
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
                    placeholder='Enter your team name'
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
                  <Label className='text-xl max-w-xl'>
                    Enter Drive Link containing Aadhar Card details of all the
                    members:
                    <Input
                      type='text'
                      name='aadhar-link'
                      className='my-2 w-full'
                      required
                      onChange={(e) => setAadharLink(e.target.value)}
                    />
                  </Label>
                  <Label className='text-xl max-w-xl'>
                    Enter Drive Link containing College ID Card details of all
                    the members:
                    <Input
                      type='text'
                      name='college-id-link'
                      className='my-2'
                      onChange={(e) => setCollegeIdLink(e.target.value)}
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
      </form>
    </>
  );
}
