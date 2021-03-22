import { getMonth, getYear } from 'date-fns';
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

  console.log(sortedTweets);
  console.log(size(filter(sortedTweets, { favorited: true })) | 0);
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
            metric={size(filter(sortedTweets, { retweeted: true })) | 0}
          />
          <MetricCard
            header="Favorited"
            link={`https://twitter.com/ryck`}
            metric={size(filter(sortedTweets, { favorited: true })) | 0}
          />
        </aside>
        <div className="mb-8 text-gray-600 max-w-none leading-6 dark:text-gray-400">
          {sortedTweets &&
            sortedTweets.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
          {sortedTweets.length == 0 && <p>No tweets for you!</p>}
        </div>
      </div>
    </Container>
  );
}

// export async function getStaticPaths() {
//   const years = tweets.map((t) => {
//     return getYear(new Date(t.created_at));
//   });

//   const uniqueYears = years
//     .filter((x, i, a) => a.indexOf(x) == i)
//     .map((y) => {
//       return { params: { year: y.toString() } };
//     });

//   console.log(uniqueYears);

//   return {
//     paths: uniqueYears,
//     fallback: false // See the "fallback" section below
//   };
// }

export async function getServerSideProps({ params }) {
  const filteredTweets = tweets.filter(
    (t) =>
      getYear(new Date(t.created_at)) == params.year &&
      getMonth(new Date(t.created_at)) + 1 == params.month
  );

  return { props: { data: filteredTweets } };
}
