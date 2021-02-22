import format from 'comma-number';
import useSWR from 'swr';

import MetricCard from '@/components/metrics/Card';
import fetcher from '@/lib/fetcher';

export default function Unsplash() {
  const { data } = useSWR('/api/unsplash', fetcher);

  const downloads = format(data?.downloads);
  const views = format(data?.views);
  const link = 'https://unsplash.com/@ryck';

  return (
    <div className="w-full my-2 grid gap-4 grid-cols-1 sm:grid-cols-2">
      <MetricCard header="Unsplash Downloads" link={link} metric={downloads} />
      <MetricCard header="Unsplash Views" link={link} metric={views} />
    </div>
  );
}
