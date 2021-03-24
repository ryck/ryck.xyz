import CountUp from 'react-countup';

export default function MetricCard({ header, metric }) {
  return (
    <div className="w-full p-4 border border-gray-200 rounded metric-card dark:border-gray-800 max-w-72">
      <div className="flex items-center text-sm text-gray-900 dark:text-gray-100">
        {header}
      </div>
      <p className="mt-2 text-4xl font-bold text-black sm:text-5xl spacing-sm dark:text-white">
        <CountUp end={metric} duration={3} />
      </p>
    </div>
  );
}
