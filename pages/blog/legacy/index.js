import { useState } from 'react';

import BlogPost from '@/components/BlogPost';
import Container from '@/components/Container';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container title="Legacy Blog" description="My old blog (in Spanish)">
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <div className="flex items-center justify-between w-full mb-6 text-black">
          <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Rick's Hideout
          </h1>
          <div className="relative w-1/3">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`This are my "legacy" post, recovered from my old blog. They are all in Spanish and probably broken, but hey... `}
        </p>

        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.slug} {...frontMatter} legacy />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('legacy');

  return { props: { posts } };
}
