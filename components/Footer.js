import Link from 'next/link';

import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      <NowPlaying />
      <div className="w-full max-w-4xl pb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/ryck">Twitter</ExternalLink>
          <ExternalLink href="https://github.com/ryck">GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/blog/legacy">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Legacy Blog (Spanish)
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
