import format from 'comma-number';
import useSWR from 'swr';

import MetricCard from '@/components/metrics/Card';
import fetcher from '@/lib/fetcher';

export default function Analytics() {
  const { data } = useSWR('/api/views', fetcher);

  const pageViews = format(data?.total);
  const link = 'https://ryck.xyz';

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} />;
}
