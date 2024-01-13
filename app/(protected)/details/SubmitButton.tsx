import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='px-4 py-2 rounded-lg bg-sky-500 hover:bg-blue-600 text-white border-none cursor-pointer disabled:bg-blue-100'
      disabled={pending}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
