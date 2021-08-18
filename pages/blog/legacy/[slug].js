import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

import components from '@/components/MDXComponents';
import LegacyBlogLayout from '@/layouts/legacyblog';
import { getFileBySlug, getFiles } from '@/lib/mdx';

export default function Blog({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <LegacyBlogLayout frontMatter={frontMatter}>
      <Component components={{ ...components }} />
    </LegacyBlogLayout>
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
