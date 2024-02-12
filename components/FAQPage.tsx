'use client';

import FAQ from '@/components/FAQ';
import Image from 'next/image';
import { useState } from 'react';

export default function FAQPage() {
  const FAQs = [
    {
      question:
        'What is the procedure for the online payment of the accommodation fee?',
      answer:
        'The Initial step on the website involves registering for accommodation by providing the necessary details. Following the completion of the accommodation details, the next step involves making the payment. Once the payment is processed, users receive their unique Inno-Code, confirming their accommodation. Subsequently, the confirmation of accommodation is provided by the Hospitality and PR Heads of Moksha-Innovision.',
    },
    {
      question: 'When will my accommodations be confirmed?',
      answer:
        'You first need to register for Moksha-Innovison and get your Inno-Code. Your accommodation will then be confirmed by the hospitality heads of Moksha-Innovision. The confirmation for the same will be communicated to the CL, who will convey the same to you, and you will also receive a mail regarding it by the first week of March.',
    },
    {
      question: 'Where will the accommodations be provided?',
      answer:
        'Accommodation will be provided to boys and girls in well-secured, separate partner hotels of Moksha-Innovision near the campus.There will be separate accommodation complexes for girls and boys to ensure the safety of all the visitors.',
    },
    {
      question: 'What is Moksha?',
      answer:
        'Moksha is the annual cultural festival of NSUT, a 3-day long escape from reality that takes place in the month of March. More than a fest, it has been a symbol of ethereal gatherings and blasting triumphs. After a successful resurrection in 2023, we’re back again with a bang.',
    },
    {
      question:
        'Will the team members be given accommodation at the same place?',
      answer:
        'We will try our best to provide you with this arrangement, but no confirmation can be given.We request that you do not ping the hospitality team for the same.',
    },
    {
      question:
        'We have no cultural committee to nominate a CL, and we are a group of 4-5 friends who want to attend the events. How do we get accommodation?',
      answer:
        'You should nominate a CL amongst yourselves, get it approved from the Moksha-Innovision authorities, and then proceed in the same manner.',
    },
    {
      question: 'Does the accommodation fee include the food facility as well?',
      answer:
        'No, the accommodation charges do not include food.However, there will be food courts operational during Moksha-Innovision to cater to the food requirements.',
    },
    {
      question: 'What do the accommodation facilities include?',
      answer:
        'The accommodation cost includes staying near the campus during the festival, direct entry to concerts, and many other perks.',
    },
    {
      question:
        'We are a group of friends who are not participating in any of the competitions and are just coming to MV to have fun. Would we be allowed?',
      answer:
        'Yes, you can definitely attend MV by registering at your respective colleges. However, for accommodation, you can contact the CL of your college and fill out the accommodation request.If your college does not have any CLs, apply for them. Accommodation would be confirmed strictly subject to availability.',
    },
    {
      question: 'What is the procedure to be followed after we reach N.S.U.T.?',
      answer:
        'You need to come to the Accommodation Desk, Admin-Block, along with your college identity card. You will be allotted a place to stay. In the case of a large contingent, a contingent leader needs to present the ID cards of all the people in his contingent at the accommodation desk along with a list of all the people.Accommodation would be strictly on a shared basis.',
    },
    {
      question: 'Where are we going to stay?',
      answer:
        'People who are getting accommodation around N.S.U.T. are going to stay in the partner hotel rooms near N.S.U.T.',
    },
  ];

  const [openFaq, setOpen] = useState(-1);
  const [opened, setOpened] = useState(true);
  const handler = (key: number) => {
    if (openFaq == key) setOpened((old) => !old);
    else {
      setOpen((_old) => key);
      setOpened(true);
    }
  };
  return (
    <div className='w-full bg-[#dc79ba] flex justify-around overflow-x-hidden pb-4 pt-2'>
      <Image
        src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsFAQ/1.png'
        alt=''
        width={100}
        height={1080}
      />
      <div className='w-3/5 flex flex-col gap-4 min-w-64 mx-3.5 md:mx-0'>
        {FAQs.map((faq, index) => {
          return (
            <div
              className='w-full bg-vibrant-orange shadow-[0_0_0_2px_#000,8px_8px_0_0_#34cc98] rounded-xl min-h-max'
              onClick={() => handler(index)}
              key={index}
            >
              <FAQ
                index={index}
                question={faq.question}
                answer={faq.answer}
                opened={openFaq === index && opened}
              />
            </div>
          );
        })}
      </div>
      <Image
        src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsFAQ/3.png'
        alt=''
        width={100}
        height={1080}
      />
    </div>
  );
}
