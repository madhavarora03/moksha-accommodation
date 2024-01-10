import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='px-4 py-4 rounded-lg bg-sky-500 text-white border-none cursor-pointer disabled:bg-blue-100'
      disabled={pending}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
