import format from 'comma-number';
import useSWR from 'swr';

import MetricCard from '@/components/metrics/Card';
import fetcher from '@/lib/fetcher';

export default function GitHub() {
  const { data } = useSWR('/api/github', fetcher);

  const stars = format(data?.stars);
  const link = 'https://github.com/ryck';

  return <MetricCard header="GitHub Stars" link={link} metric={stars} />;
}
