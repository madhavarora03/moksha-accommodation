'use client';

// import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { Session } from 'next-auth';
import { useSearchParams } from 'next/navigation';
import handleSubmit from '@/app/_actions/handleSubmit';
import SubmitButton from './SubmitButton';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const FormComponent = ({ session }: { session: Session }) => {
  const leaderMail = session.user?.email;
  const searchParams = useSearchParams();
  // const toast = useToast();

  const state = {
    checkIn: Number(searchParams.get('checkIn')),
    checkOut: Number(searchParams.get('checkOut')),
    personCount: Number(searchParams.get('personCount')),
  };

  const initialPersonState = {
    leader_id: leaderMail,
    college_name: '',
    team_name: '',
    member_mail: '',
    name: '',
    age: '',
    gender: '',
    phone: '',
    check_in_date: state.checkIn,
    check_out_date: state.checkOut,
  };

  const [persons, setPersons] = useState(
    Array.from({ length: state.personCount }, () => ({ ...initialPersonState }))
  );

  if (
    state.checkIn < 5 ||
    state.checkOut < 6 ||
    state.personCount < 1 ||
    state.checkIn > 8 ||
    state.checkOut > 9 ||
    state.checkIn > state.checkOut
  ) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Invalid Request</h1>
        <h3>Redirecting...</h3>
      </div>
    );
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
    check_in_date: state.checkIn,
    check_out_date: state.checkOut,
  });

  return (
    <div
      className='mx-auto px-4 rounded-2xl my-3 md:my-6 bg-[#f60] shadow-[0_0_0_2px_#000,8px_8px_0_0_#34cc98] w-full py-6 md:py-8 text-black'
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <form action={formAction} style={{ maxWidth: '600px', margin: 'auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <Label style={{ display: 'block', marginBottom: '5px' }}>
            Team Name:
            <Input
              className='text-black'
              type='text'
              name='team-name'
              value={persons[0].team_name}
              onChange={(e) => handleTeamNameChange(e.target.value)}
              style={{
                marginLeft: '10px',
                padding: '5px',
                borderRadius: '3px',
                border: '1px solid #ccc',
              }}
              required={true}
            />
          </Label>
        </div>
        {persons.map((person, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Label style={{ display: 'block', marginBottom: '5px' }}>
              Name:
              <Input
                className='text-black'
                type='text'
                name={`${index}-name`}
                value={person.name}
                onChange={(e) =>
                  handleInputChange(index, 'name', e.target.value)
                }
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                }}
                required={true}
              />
            </Label>
            <Label style={{ display: 'block', marginBottom: '5px' }}>
              Phone:
              <Input
                className='text-black'
                type='text'
                value={person.phone}
                name={`${index}-phone`}
                onChange={(e) =>
                  handleInputChange(index, 'phone', e.target.value)
                }
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                }}
                required={true}
              />
            </Label>
            <Label style={{ display: 'block', marginBottom: '5px' }}>
              Email:
              <Input
                className='text-black'
                type='email'
                value={person.member_mail}
                name={`${index}-member-email`}
                onChange={(e) =>
                  handleInputChange(index, 'member_mail', e.target.value)
                }
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                }}
                required={true}
              />
            </Label>
            <Label style={{ display: 'block', marginBottom: '5px' }}>
              College:
              <Input
                className='text-black'
                type='text'
                value={person.college_name}
                name={`${index}-college`}
                onChange={(e) =>
                  handleInputChange(index, 'college_name', e.target.value)
                }
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                }}
                required={true}
              />
            </Label>
            <Label style={{ display: 'block', marginBottom: '5px' }}>
              Gender:
              <Input
                className='text-black'
                type='text'
                value={person.gender}
                name={`${index}-gender`}
                onChange={(e) =>
                  handleInputChange(index, 'gender', e.target.value)
                }
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                }}
                required={true}
              />
            </Label>
            <Label style={{ display: 'block', marginBottom: '5px' }}>
              Age:
              <Input
                className='text-black'
                type='text'
                name={`${index}-age`}
                value={person.age}
                onChange={(e) =>
                  handleInputChange(index, 'age', e.target.value)
                }
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                }}
                required={true}
              />
            </Label>
          </div>
        ))}
        <SubmitButton />
      </form>
    </div>
  );
};

export default FormComponent;
