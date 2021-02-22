import format from 'comma-number';
import useSWR from 'swr';

import MetricCard from '@/components/metrics/Card';
import fetcher from '@/lib/fetcher';

export default function Buttondown() {
  const { data } = useSWR('/api/subscribers', fetcher);

  const subscriberCount = format(data?.count);
  const link = 'https://buttondown.email/ryck';

  return (
    <MetricCard
      header="Newsletter Subscribers"
      link={link}
      metric={subscriberCount}
    />
  );
}
