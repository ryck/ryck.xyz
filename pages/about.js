import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About">
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          About Me
        </h1>
        <div className="mb-8 text-gray-600 prose max-w-none leading-6 dark:text-gray-400">
          <p>
            Hey, I’m Rick. I'm a developer, tinker, father-of-one, and I work at
            10x Banking as a Software Development Manager (SDM).
          </p>
        </div>
      </div>
    </Container>
  );
}
