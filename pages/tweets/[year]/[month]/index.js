import { format, getMonth, getYear } from 'date-fns';
import { filter, size } from 'lodash';
import Link from 'next/link';

import Container from '@/components/Container';
import MetricCard from '@/components/metrics/Card';
import Tweet from '@/components/Tweet';
import { tweets } from '@/data/tweets.js';

export default function Tweets({ data, year, month }) {
  const sortedTweets = data
    // .slice(0, 200)
    .sort(
      (a, b) => Number(new Date(a.created_at)) - Number(new Date(b.created_at))
    );

  return (
    <Container title="Tweets">
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <nav className="my-8 font-bold text-black" aria-label="Breadcrumb">
          <ol className="inline-flex p-0 list-none">
            <li className="flex items-center">
              <Link href={`/tweets/`}>
                <a className="">Tweets</a>
              </Link>
              <svg
                className="w-3 h-3 mx-3 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link href={`/tweets/${year}`}>
                <a>{year}</a>
              </Link>
              <svg
                className="w-3 h-3 mx-3 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <a className="text-gray-500" aria-current="page">
                {format(new Date(year, month - 1, 1), 'LLL')}
              </a>
            </li>
          </ol>
        </nav>

        {sortedTweets.length != 0 && (
          <aside className="w-full grid grid-cols-3 gap-4">
            <MetricCard
              header="Tweets"
              link={`https://twitter.com/ryck`}
              metric={sortedTweets.length}
            />
            <MetricCard
              header="Retweeted"
              link={`https://twitter.com/ryck`}
              metric={size(filter(sortedTweets, { retweeted: true })) | 0}
            />
            <MetricCard
              header="Favorited"
              link={`https://twitter.com/ryck`}
              metric={size(filter(sortedTweets, { favorited: true })) | 0}
            />
          </aside>
        )}
        <div className="mb-8 text-gray-600 max-w-none leading-6 dark:text-gray-400">
          {sortedTweets &&
            sortedTweets.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
          {sortedTweets.length == 0 && <p>No tweets for you!</p>}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
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

  const paths = years
    .map((year) =>
      months.map((month) => {
        if (year == 2007 && month < 2) return;
        if (year == 2021 && month > 2) return;
        return {
          params: { year: year.toString(), month: month.toString() }
        };
      })
    )
    .flat()
    .filter(Boolean);

  return {
    paths,
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const filteredTweets = tweets.filter(
    (t) =>
      getYear(new Date(t.created_at)) == params.year &&
      getMonth(new Date(t.created_at)) + 1 == params.month
  );

  return {
    props: { data: filteredTweets, year: params.year, month: params.month }
  };
}
