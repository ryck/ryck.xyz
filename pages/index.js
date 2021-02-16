import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          👋🏻 I’m Rick
        </h1>
        <h2 className="prose max-w-none text-gray-600 dark:text-gray-400 mb-16">
          I’m a developer, tinker, and father-of-one. I work at at 10x Banking as a Software Development Manager (SDM). You’ve found my personal slice of the internet.
        </h2>
      </div>
    </Container>
  );
}
