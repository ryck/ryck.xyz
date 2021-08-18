import { format as format_fns, parseISO } from 'date-fns';
import Link from 'next/link';

const LegacyBlogPost = ({ title, summary, slug, publishedAt }) => {
  const date = publishedAt
    ? format_fns(parseISO(publishedAt), 'dd/MM/yyyy')
    : null;
  return (
    <Link href={`/blog/legacy/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right">
              {date}
            </p>
          </div>
          {summary && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">{summary}</p>
          )}
        </div>
      </a>
    </Link>
  );
};

export default LegacyBlogPost;
