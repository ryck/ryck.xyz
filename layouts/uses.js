import Container from '@/components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="Uses"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          My Gear
        </h1>
        <p className="mt-2 mb-8 text-gray-700 dark:text-gray-300">
          Here's what tech I'm currently using for coding, videos, and music.
          Most of these have been accumulated over the past few years, with a
          recent office upgrade in 2020.
        </p>
        <div className="w-full prose dark:prose-dark">{children}</div>
      </article>
    </Container>
  );
}
