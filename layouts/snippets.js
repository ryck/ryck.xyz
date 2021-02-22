import Image from 'next/image';

import Container from '@/components/Container';

export default function SnippetLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} - Code Snippet`}
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto mb-16">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
              {frontMatter.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {frontMatter.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={frontMatter.title}
              height={48}
              width={48}
              src={`/logos/${frontMatter.logo}`}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-full prose dark:prose-dark">{children}</div>
      </article>
    </Container>
  );
}
