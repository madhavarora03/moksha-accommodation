// Function to load script and append in DOM tree.
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
  keyId: string;
  amount: number;
  name: string;
  email: string;
};

const RenderRazorpay = async ({
  orderId,
  keyId,
  amount,
  name,
  email,
}: RenderRazorpayProps) => {
  // To load razorpay checkout modal script.
  const displayRazorpay = async (options: any) => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js',
    );

    if (!res) {
      console.log('Razorpay SDK failed to load. Are you online?');
      return;
    }
    // All information is loaded in options which we will discuss later.
    //@ts-ignore
    const rzp1: Razorpay = new window.Razorpay(options);

    // to open razorpay checkout modal.
    rzp1.open();
  };

  const options = {
    key: keyId,
    amount: amount,
    currency: 'INR',
    name: 'Moksha',
    description: 'Test Transaction',
    image: 'https://mokshainnovision.s3.eu-north-1.amazonaws.com/ww_MV.png',
    order_id: orderId,
    callback_url: `${
      process.env.VERCEL_URL ?? 'http://localhost:3000'
    }/api/callback?orderId=${orderId}`,
    prefill: {
      name: name,
      email: email,
    },
    notes: {
      address:
        'Netaji Subhas University of Technology, Dwarka, New Delhi, India',
    },
    theme: {
      color: '#151515',
    },
  };

  console.log('in razorpay');
  await displayRazorpay(options);

  return null;
};

export default RenderRazorpay;
