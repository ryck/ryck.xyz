import { format, parseISO } from 'date-fns';

import Container from '@/components/Container';
import ViewCounter from '@/components/ViewCounter';

const editUrl = (slug) =>
  `https://github.com/ryck/ryck.xyz/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://ryck.xyz/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title}`}
      description={frontMatter.summary}
      image={`https://ryck.xyz${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-4xl mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 mb-8 md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {format(parseISO(frontMatter.publishedAt), 'dd/MMMM/yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        <div className="w-full prose prose-xl dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="mt-6 text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}
