import format from 'comma-number';
import useSWR from 'swr';

import MetricCard from '@/components/metrics/Card';
import fetcher from '@/lib/fetcher';

export default function Gumroad() {
  const { data } = useSWR('/api/gumroad', fetcher);

  const sales = format(data?.sales);
  const link = 'https://gumroad.com/ryck';

  return (
    <MetricCard
      header="Gumroad Sales"
      link={link}
      metric={sales && `$${sales}`}
    />
  );
}
