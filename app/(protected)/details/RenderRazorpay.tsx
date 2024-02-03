import { useEffect } from 'react';
import { createHmac } from 'crypto';

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
      image: 'https://mokshainnovision.s3.eu-north-1.amazonaws.com/ww_MV.png',
      order_id: orderId,
      payment_method: 'upi', // Add UPI as a payment method
      handler: function (response: any) {
        const hashtext = hash(`${orderId}|${response.razorpay_payment_id}`);
        console.log(hashtext);
        console.log(response.razorpay_signature);
        const succeeded = hashtext == response.razorpay_signature;
        if (!succeeded) {
          alert('Some Error');
          return;
        }
        //@ts-ignore
        document.querySelector('#razorpay-payment-id').value =
          response.razorpay_payment_id;
        //@ts-ignore
        document.querySelector('#razorpay-order-id').value =
          response.razorpay_order_id;
        //@ts-ignore
        document.querySelector('#razorpay-signature').value =
          response.razorpay_signature;
        //@ts-ignore
        document.querySelector('#user-form').submit();
        return;
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
