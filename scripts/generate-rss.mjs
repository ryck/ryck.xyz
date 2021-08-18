import { readdirSync, readFileSync, writeFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import RSS from 'rss';

async function generate() {
  const feed = new RSS({
    title: 'Ricardo Gonzalez',
    site_url: 'https://ryck.xyz',
    feed_url: 'https://ryck.xyz/feed.xml'
  });

  const posts = readdirSync(join(process.cwd(), 'data', 'blog'));
  posts.map((name) => {
    const content = readFileSync(join(process.cwd(), 'data', 'blog', name));
    const frontmatter = matter(content);

    feed.item({
      title: frontmatter.data.title,
      url: 'https://ryck.xyz/blog/' + name.replace(/\.mdx?/, ''),
      date: frontmatter.data.publishedAt,
      description: frontmatter.data.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
