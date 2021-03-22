import { filter, size } from 'lodash';

import Container from '@/components/Container';
import MetricCard from '@/components/metrics/Card';
import Tweet from '@/components/Tweet';
import { tweets } from '@/data/tweets.js';

export default function Tweets({ data }) {
  const tweets = data
    // .slice(0, 200)
    .sort(
      (a, b) => Number(new Date(a.created_at)) - Number(new Date(b.created_at))
    );

  console.log(filter(tweets, { retweeted: true }));
  return (
    <Container title="Tweets">
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Tweets
        </h1>

        <aside className="grid grid-cols-3 gap-4">
          <MetricCard
            header="Tweets"
            link={`https://twitter.com/ryck`}
            metric={tweets.length}
          />
          <MetricCard
            header="Retweeted"
            link={`https://twitter.com/ryck`}
            metric={size(filter(tweets, { retweeted: true }))}
          />
          <MetricCard
            header="Favorited"
            link={`https://twitter.com/ryck`}
            metric={size(filter(tweets, { favorited: true }))}
          />
        </aside>

        <div className="mt-8 mb-8 text-gray-600 max-w-none leading-6 dark:text-gray-400">
          {tweets && tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  return { props: { data: tweets } };
}
