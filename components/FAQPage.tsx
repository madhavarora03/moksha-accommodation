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
        'The first step is registering for accommodation on the website by providing the required details. After completing the accommodation details, the next step is payment. For this, you will be redirected to the payment gateway. After successful payment, you will receive a unique Inno-Code for accommodation confirmation. The Inno-Code will be the same for all members within a contingent.',
    },
    {
      question: 'When will my accommodation be confirmed?',
      answer:
        "You first need to register and make payment for accommodation to receive your Inno-Code. Afterwards, your college's CL or your group representative will receive accommodation confirmation via email by the first week of March.",
    },
    {
      question:
        'Does obtaining accommodation require being a part of a small group or large contingent?',
      answer: 'No, you can register as an individual for the accommodation.',
    },
    {
      question: 'Where will the accommodations be provided?',
      answer:
        'Accommodation will be provided to both boys and girls in secure partner hotels of Moksha-Innovision, near the campus.',
    },
    {
      question:
        'Will the team members be given accommodation at the same place?',
      answer:
        'We will try our best to provide you with this arrangement, but confirmation cannot be provided. We request you to refrain from pinging the accommodation team for the same.',
    },
    {
      question:
        'We are a small group of friends who are not participating in the competitions but want to attend Moksha-Innovision. Would we be eligible for accommodation?',
      answer:
        'Yes, you can contact the CL (Contingent Leader) of your college and fill out the accommodation request. If your college does not have any CLs, choose one person of contact amongst yourselves to represent your entire group. Accommodation confirmation by our team will be strictly subject to availability.',
    },
    {
      question: 'Does the accommodation fee include the food facility as well?',
      answer:
        'No, the accommodation charges do not include food. However, Food Courts will be operational during Moksha-Innovision to cater to the food requirements.',
    },
    {
      question: 'What is the procedure to be followed after we reach NSUT?',
      answer:
        'You need to report to the Accommodation Desk in the Admin Block with your college ID card to receive your assigned lodging. For large groups, the contingent leader must present ID cards for all members along with a list of all the members. Accommodation would be strictly on a shared basis.',
    },
    {
      question: 'What do the accommodation facilities include?',
      answer:
        'The accommodation cost includes staying near the campus during the festival, direct entry to concerts (passes for which shall be made available to you upon arrival), and many other perks.',
    },
    {
      question:
        'I am not traveling with my college contingent and will be arriving separately. what should I do?',
      answer:
        'Contact your Contingent Leader, as your registration at the accommodation desk will be handled by them.',
    },
    {
      question:
        'Is the accommodation fee refundable if I wish to opt out of accommodation at any later stage?',
      answer:
        'No, once the payment is processed, the accommodation fee is not refundable in any scenario.',
    },
    {
      question: 'What will be the check-in and check-out timings?',
      answer:
        'Check-in timing will be 11 AM, and Check-out timing will be 10 AM.',
    },
    {
      question: 'Which is the nearest metro station to NSUT?',
      answer: 'Dwarka Mor, Gate no. 2 is the closest metro station to NSUT.',
    },
    {
      question:
        'What should be the cab location for the pickup from/drop at college?',
      answer: 'NSUT Main Gate, Dwarka Sector-3, Delhi 110078 India',
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
      <div className='w-3/5 flex flex-col md:gap-6 gap-5 min-w-64 mx-3.5 md:mx-0'>
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
