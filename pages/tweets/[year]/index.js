import { getYear } from 'date-fns';
import { filter, size } from 'lodash';

import Container from '@/components/Container';
import MetricCard from '@/components/metrics/Card';
import Tweet from '@/components/Tweet';
import { tweets } from '@/data/tweets.js';

export default function Tweets({ data }) {
  const sortedTweets = data
    // .slice(0, 200)
    .sort(
      (a, b) => Number(new Date(a.created_at)) - Number(new Date(b.created_at))
    );

  return (
    <Container title="Tweets">
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Tweets
        </h1>
        <aside className="w-full grid grid-cols-3 gap-4">
          <MetricCard
            header="Tweets"
            link={`https://twitter.com/ryck`}
            metric={sortedTweets.length}
          />
          <MetricCard
            header="Retweeted"
            link={`https://twitter.com/ryck`}
            metric={
              size(
                filter(sortedTweets, function (t) {
                  return t.retweet_count > 0;
                })
              ) | 0
            }
          />
          <MetricCard
            header="Favorited"
            link={`https://twitter.com/ryck`}
            metric={
              size(
                filter(sortedTweets, function (t) {
                  return t.favorite_count > 0;
                })
              ) | 0
            }
          />
        </aside>
        <div className="mb-8 text-gray-600 max-w-none leading-6 dark:text-gray-400">
          {sortedTweets.map((tweet) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
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

  const paths = years.map((year) => {
    return { params: { year: year.toString() } };
  });

  return {
    paths,
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const filteredTweets = tweets.filter(
    (t) => getYear(new Date(t.created_at)) == params.year
  );

  return { props: { data: filteredTweets } };
}
