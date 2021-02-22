import hydrate from 'next-mdx-remote/hydrate';

import MDXComponents from '@/components/MDXComponents';
import LegacyBlogLayout from '@/layouts/legacyblog';
import { getFileBySlug, getFiles } from '@/lib/mdx';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return (
    <LegacyBlogLayout frontMatter={frontMatter}>{content}</LegacyBlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('legacy');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('legacy', params.slug);

  return { props: post };
}
