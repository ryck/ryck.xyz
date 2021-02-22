import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function NewsletterLink({ slug, publishedAt }) {
  return (
    <li>
      <Link href={`/newsletter/${slug}`}>
        <a>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</a>
      </Link>
    </li>
  );
}
