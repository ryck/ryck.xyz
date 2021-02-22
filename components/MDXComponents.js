import Image from 'next/image';
import Link from 'next/link';
import Tweet from 'react-tweet-embed';

import ConsCard from '@/components/ConsCard';
import Analytics from '@/components/metrics/Analytics';
import Gumroad from '@/components/metrics/Gumroad';
import Unsplash from '@/components/metrics/Unsplash';
import YouTube from '@/components/metrics/Youtube';
import ProsCard from '@/components/ProsCard';
import Step from '@/components/Step';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Analytics,
  ConsCard,
  Gumroad,
  ProsCard,
  Step,
  Tweet,
  Unsplash,
  YouTube
};

export default MDXComponents;
