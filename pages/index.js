import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          👋🏻 I’m Rick
        </h1>
        <h2 className="mb-16 text-gray-600 prose max-w-none dark:text-gray-400">
          I’m a developer, tinker, and father-of-one. I work at at 10x Banking
          as a Software Development Manager (SDM). You’ve found my personal
          slice of the internet.
        </h2>
      </div>
    </Container>
  );
}
