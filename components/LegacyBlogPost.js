import format from 'comma-number';
import Link from 'next/link';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const LegacyBlogPost = ({ title, summary, slug, excerpt }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;
  return (
    <Link href={`/blog/legacy/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {`${views ? format(views) : '–––'} views`}
            </p>
          </div>
          {summary && !excerpt && (
            <p className="text-gray-600 dark:text-gray-400">{summary}</p>
          )}
          {excerpt && !summary && (
            <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
          )}
        </div>
      </a>
    </Link>
  );
};

export default LegacyBlogPost;
