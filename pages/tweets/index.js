import { format } from 'date-fns';
import Link from 'next/link';

import Container from '@/components/Container';

export default function Tweets() {
  const years = [
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021
  ];

  const months = Array.from(Array(12).keys(), (n) => n + 1);

  return (
    <Container title="Tweets">
      <div className="w-full max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Tweets
        </h1>
        <div className="mt-8 mb-8 text-gray-600 max-w-none leading-6 dark:text-gray-400">
          <h3 className="text-lg font-semibold">
            Welcome to my tweet archive!
          </h3>
          <p className="mt-4">
            This are all my tweets, since the very begining (February 2007)
            until January 2021
          </p>
          <div className="">
            {years
              .sort((a, b) => b - a)
              .map((year) => (
                <article className="mt-8" key={year}>
                  <Link href={`/tweets/${year}`}>
                    <a className="text-2xl font-bold">{year}</a>
                  </Link>
                  <div className="mt-4 grid grid-cols-12">
                    {months.map((month) => (
                      <Link
                        href={`/tweets/${year}/${month}`}
                        key={`${month}.${year}`}
                      >
                        <a className="text-xl">
                          {format(new Date(year, month - 1, 1), 'LLL')}
                        </a>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
