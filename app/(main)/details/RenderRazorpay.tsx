import { createHmac } from 'crypto';
import { useEffect } from 'react';

const loadScript = (src: any) =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      console.log('razorpay loaded successfully');
      resolve(true);
    };
    script.onerror = () => {
      console.log('error in loading razorpay');
      resolve(false);
    };
    document.body.appendChild(script);
  });

type RenderRazorpayProps = {
  orderId: string;
  amount: number;
  name: string;
  email: string;
};

const RenderRazorpay = ({
  orderId,
  amount,
  name,
  email,
}: RenderRazorpayProps) => {
  useEffect(() => {
    const displayRazorpay = async (options: any) => {
      const res = await loadScript(
        'https://checkout.razorpay.com/v1/checkout.js',
      );

      if (!res) {
        console.log('Razorpay SDK failed to load. Are you online?');
        return;
      }
      //@ts-ignore
      const rzp1: Razorpay = new window.Razorpay(options);

      rzp1.open();
    };

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
      amount: amount,
      currency: 'INR',
      name: 'Moksha',
      description: 'Test Transaction',
      image: '/logomark.JPG',
      order_id: orderId,
      handler: function (response: any) {
        const hashtext = hash(`${orderId}|${response.razorpay_payment_id}`);
        const succeeded = hashtext == response.razorpay_signature;
        if (!succeeded) {
          alert(
            'Some Error. Signature could not be verified. Please contact administrator',
          );
          return;
        }
        const paymentIdInput = document.querySelector(
          '#razorpay-payment-id',
        ) as HTMLInputElement | null;
        const orderIdInput = document.querySelector(
          '#razorpay-order-id',
        ) as HTMLInputElement | null;
        const signatureInput = document.querySelector(
          '#razorpay-signature',
        ) as HTMLInputElement | null;
        const form = document.querySelector(
          '#user-form',
        ) as HTMLFormElement | null;
        if (
          paymentIdInput == null ||
          orderIdInput == null ||
          signatureInput == null ||
          form == null
        ) {
          alert('The input fields were not found');
          return;
        } else {
          paymentIdInput.value = response.razorpay_payment_id;
          orderIdInput.value = response.razorpay_order_id;
          signatureInput.value = response.razorpay_signature;
          form.submit();
        }
      },
      prefill: {
        name: name,
        email: email,
      },
      notes: {
        address:
          'Netaji Subhas University of Technology, Dwarka, New Delhi, India',
      },
      modal: {
        confirm_close: true,
      },
      theme: {
        color: '#151515',
      },
    };
    console.log('in razorpay');
    displayRazorpay(options);
  }, [amount, orderId, name, email]);

  return null;
};

function hash(string: string) {
  const secret = process.env.NEXT_PUBLIC_RAZORPAY_API_SECRET ?? 'thisisasecret';
  console.log(secret);
  return createHmac('sha256', secret).update(string).digest('hex');
}

export default RenderRazorpay;
