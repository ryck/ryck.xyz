import { format, parseISO } from 'date-fns';

import Container from '@/components/Container';
import Subscribe from '@/components/Subscribe';

export default function NewsletterLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title}`}
      description={frontMatter.summary}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 mb-4 md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {frontMatter.by}
              {'Ricardo Gonzalez / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="w-full prose dark:prose-dark">{children}</div>
        <div className="mt-8">
          <Subscribe />
        </div>
      </article>
    </Container>
  );
}
