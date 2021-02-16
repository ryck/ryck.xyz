import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import LegacyBlogLayout from '@/layouts/legacyblog';
import MDXComponents from '@/components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <LegacyBlogLayout frontMatter={frontMatter}>{content}</LegacyBlogLayout>;
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
