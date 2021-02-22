import Link from 'next/link';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404">
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          404 - Page not found
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          I'm guessing you spelled something wrong. Can you double check that
          URL?
        </p>
        <Link href="/">
          <a className="w-64 p-1 mx-auto font-bold text-center text-black bg-gray-100 sm:p-4 dark:bg-gray-900 rounded-md dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
