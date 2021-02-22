import format from 'comma-number';
import useSWR from 'swr';

import MetricCard from '@/components/metrics/Card';
import fetcher from '@/lib/fetcher';

export default function YouTube() {
  const { data } = useSWR('/api/youtube', fetcher);

  const subscriberCount = format(data?.subscriberCount);
  const viewCount = format(data?.viewCount);
  const link = 'https://www.youtube.com/channel/UCPDfmsUe0qCaBV8udD0gn4A';

  return (
    <div className="w-full my-2 grid gap-4 grid-cols-1 sm:grid-cols-2">
      <MetricCard
        header="YouTube Subscribers"
        link={link}
        metric={subscriberCount}
      />
      <MetricCard header="YouTube Views" link={link} metric={viewCount} />
    </div>
  );
}
