import format from 'comma-number';
import { trackGoal } from 'fathom-client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import useSWR from 'swr';

import ErrorMessage from '@/components/ErrorMessage';
import LoadingSpinner from '@/components/LoadingSpinner';
import SuccessMessage from '@/components/SuccessMessage';
import fetcher from '@/lib/fetcher';

export default function Subscribe() {
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);
  const { data } = useSWR('/api/subscribers', fetcher);
  const subscriberCount = format(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: 'loading' });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: 'error',
        message: error
      });
      return;
    }

    trackGoal('JYFUFMSF', 0);
    inputEl.current.value = '';
    setForm({
      state: 'success',
      message: `Hooray! You're now on the list.`
    });
  };

  return (
    <div className="w-full p-6 my-4 border border-blue-200 rounded dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <h5 className="text-lg font-bold text-gray-900 md:text-xl dark:text-gray-100">
        Subscribe to the newsletter
      </h5>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          required
          className="block w-full px-4 py-2 mt-1 text-gray-900 bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md dark:bg-gray-800 dark:text-gray-100"
        />
        <button
          className="absolute flex items-center justify-center h-8 px-4 font-bold text-gray-900 bg-gray-100 rounded right-1 top-1 dark:bg-gray-700 dark:text-gray-100 w-28"
          type="submit"
        >
          {form.state === 'loading' ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === 'error' ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === 'success' ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {`${subscriberCount || '-'} subscribers – `}
          <Link href="/newsletter">
            <a>27 issues</a>
          </Link>
        </p>
      )}
    </div>
  );
}
