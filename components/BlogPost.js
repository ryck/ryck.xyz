import { format as format_fns, parseISO } from 'date-fns';
import Link from 'next/link';

const BlogPost = ({
  title,
  summary,
  slug,
  publishedAt,
  excerpt,
  legacy = false
}) => {
  const date = publishedAt
    ? format_fns(parseISO(publishedAt), 'dd/MM/yyyy')
    : null;

  const path = legacy ? `/blog/legacy/${slug}` : `/blog/${slug}`;

  return (
    <Link href={path}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="flex mb-2 text-sm text-gray-500">{date}</p>
          {summary && !excerpt && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">{summary}</p>
          )}
          {excerpt && !summary && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">{excerpt}</p>
          )}{' '}
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
