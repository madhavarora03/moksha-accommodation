import zod from 'zod';

import {config} from 'dotenv';

const schema = zod.object({
  RAZORPAY_API_KEY: zod.string(),
  RAZORPAY_API_SECRET: zod.string(),
});

const env = schema.parse(process.env);

export {RAZORPAY_API_KEY, RAZORPAY_API_SECRET } = env;