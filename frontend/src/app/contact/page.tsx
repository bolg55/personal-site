'use client';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import toast, { Toaster } from 'react-hot-toast';

type FormValues = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().nonempty('Name is required').min(2).max(45),
  email: z
    .string()
    .nonempty('Email is required')
    .email({ message: 'Must be a valid email' })
    .max(100),
  subject: z.string().nonempty('This is required').min(2).max(100),
  message: z
    .string()
    .nonempty('Please provide a message...')
    .min(2)
    .max(1000, { message: 'This is too long' }),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const submitForm = (result: FormValues) => {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contacts`;
    axios
      .post(
        url,
        { data: result },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((data) => {
        console.log(data);
        toast.success('Message sent successfully');
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Error: ${error}`);
      })
      .finally(() => reset());
  };

  return (
    <>
      <Toaster />
      <div className='min-h-[83vh] dark:bg-dark bg-light isolate'>
        <div className='grid grid-cols-2 mx-auto max-w-7xl lg:grid-cols-1'>
          <div className='static px-8 py-48 pt-32 pb-20 lg:relative lg:px-6 sm:pt-24 sm:py-20'>
            <div className='max-w-xl mx-0 lg:max-w-lg lg:mx-auto'>
              <h2 className='text-4xl font-semibold text-dark dark:text-light'>
                Get in touch
              </h2>
              <p className='mt-6 text-lg leading-8 dark:text-light text-dark'>
                Hello there! Thanks for stopping by. As a passionate developer,
                I&apos;m always eager to explore new opportunities in the
                industry. If you have any questions or would like to work
                together, feel free to reach out to me. Let&apos;s build
                something great!
              </p>
              <dl className='mt-10 space-y-4 text-base leading-7 text-dark/75 dark:text-light/75'>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>Email</span>
                    <HiOutlineEnvelope
                      className='w-6 dark:text-light/75 text-dark/75 h-7'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>
                    <a
                      className='dark:hover:text-primaryDark hover:text-primary'
                      href='mailto:kellen@kellenbolger.ca'
                    >
                      kellen@kellenbolger.ca
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(submitForm)}
            className='px-8 py-48 pt-20 pb-32 lg:px-6 sm:pb-24 lg:py-20'
          >
            <div className='max-w-xl mr-0 lg:mx-auto lg:max-w-lg'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 '>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='name'
                    className='block text-sm font-semibold leading-6 dark:text-light text-dark'
                  >
                    Name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      id='name'
                      autoComplete='Name'
                      autoCapitalize='words'
                      {...register('name')}
                      className='block w-full rounded-md border dark:bg-light/5 dark:border-transparent  px-3.5 py-2 dark:text-light text-dark shadow-sm bg-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm leading-6'
                    />
                  </div>
                  {errors.name && (
                    <span className='mt-2 text-sm text-red-600'>
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 dark:text-light text-dark'
                  >
                    Email
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='email'
                      id='email'
                      {...register('email')}
                      autoComplete='email'
                      className='block w-full rounded-md border dark:bg-light/5 dark:border-transparent  px-3.5 py-2 dark:text-light text-dark shadow-sm bg-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm leading-6'
                    />
                  </div>
                  {errors.email && (
                    <span className='mt-2 text-sm text-red-600'>
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-semibold leading-6 dark:text-light text-dark'
                  >
                    Subject
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      id='subject'
                      {...register('subject')}
                      autoComplete='subject'
                      className='block w-full rounded-md border dark:bg-light/5 dark:border-transparent  px-3.5 py-2 dark:text-light text-dark shadow-sm bg-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm leading-6'
                    />
                  </div>
                  {errors.subject && (
                    <span className='mt-2 text-sm text-red-600'>
                      {errors.subject.message}
                    </span>
                  )}
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold leading-6 dark:text-light text-dark'
                  >
                    Message
                  </label>
                  <div className='mt-2.5'>
                    <textarea
                      id='message'
                      {...register('message')}
                      rows={4}
                      className='block w-full rounded-md border dark:bg-light/5 dark:border-transparent  px-3.5 py-2 dark:text-light text-dark shadow-sm bg-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm leading-6'
                      defaultValue={''}
                    />
                  </div>
                  {errors.message && (
                    <span className='mt-2 text-sm text-red-600'>
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>
              <div className='flex justify-end mt-8'>
                <button
                  type='submit'
                  className='rounded-md bg-dark dark:bg-light px-3.5 py-2.5 text-center text-sm font-semibold text-light dark:text-dark shadow-sm hover:bg-primary dark:hover:bg-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-150 ease-in-out'
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
