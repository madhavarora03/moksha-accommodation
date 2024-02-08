'use client';

import Image from 'next/image';
import FAQ from '../components/FAQ';
import { useState } from 'react';

export default function FAQPage() {
  const FAQs = [
    {
      question: 'What is Moksha?',
      answer:
        'Moksha is the annual cultural festival of NSUT, a 3-day long escape from reality that takes place in the month of March. More than a fest, it has been a symbol of ethereal gatherings and blasting triumphs. After a successful resurrection in 2023, we’re back again with a bang.',
    },
    {
      question: 'What is Innovision?',
      answer:
        'Innovision is the annual technical festival of NSUT, a 3-day long fiesta that shines across the month of March. The clicking of keyboards and the rumbling of brains is the theme music of Innovision, which brings along a medley of mind-boggling technical events for all the techies out there.',
    },
    {
      question:
        'When will Moksha - Innovision’24 be held ? What are the exact dates ?',
      answer:
        'Moksha - Innovision is a 3 day annual cultural - tech extravaganza, organised in the month of March. The dates will be revealed soon.',
    },
    {
      question: 'What is Moksha?',
      answer:
        'Moksha is the annual cultural festival of NSUT, a 3-day long escape from reality that takes place in the month of March. More than a fest, it has been a symbol of ethereal gatherings and blasting triumphs. After a successful resurrection in 2023, we’re back again with a bang.',
    },
    {
      question: 'What is Innovision?',
      answer:
        'Innovision is the annual technical festival of NSUT, a 3-day long fiesta that shines across the month of March. The clicking of keyboards and the rumbling of brains is the theme music of Innovision, which brings along a medley of mind-boggling technical events for all the techies out there.',
    },
    {
      question:
        'When will Moksha - Innovision’24 be held ? What are the exact dates ?',
      answer:
        'Moksha - Innovision is a 3 day annual cultural - tech extravaganza, organised in the month of March. The dates will be revealed soon.',
    },
    {
      question: 'What is Moksha?',
      answer:
        'Moksha is the annual cultural festival of NSUT, a 3-day long escape from reality that takes place in the month of March. More than a fest, it has been a symbol of ethereal gatherings and blasting triumphs. After a successful resurrection in 2023, we’re back again with a bang.',
    },
    {
      question: 'What is Innovision?',
      answer:
        'Innovision is the annual technical festival of NSUT, a 3-day long fiesta that shines across the month of March. The clicking of keyboards and the rumbling of brains is the theme music of Innovision, which brings along a medley of mind-boggling technical events for all the techies out there.',
    },
    {
      question:
        'When will Moksha - Innovision’24 be held ? What are the exact dates ?',
      answer:
        'Moksha - Innovision is a 3 day annual cultural - tech extravaganza, organised in the month of March. The dates will be revealed soon.',
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
    <div className='w-screen bg-[#dc79ba] flex justify-around overflow-x-hidden pb-4 pt-2'>
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
              className='w-full bg-pumpkin shadow-[0_0_0_2px_#000,8px_8px_0_0_#34cc98] rounded-xl min-h-max'
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
