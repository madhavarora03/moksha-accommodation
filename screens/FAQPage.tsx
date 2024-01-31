import Image from 'next/image';
import FAQ from '../components/FAQ';

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
  return (
    <div className='w-screen bg-[#dc79ba] flex justify-around overflow-hidden pb-4 pt-2'>
      <Image
        src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsFAQ/1.png'
        alt=''
        width={100}
        height={1080}
      />
      <div className='w-3/5 flex flex-col gap-4'>
        {FAQs.map((faq) => (
          <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
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
