import Autolinker from 'autolinker';
import comma from 'comma-number';
import { format } from 'date-fns';
import Image from 'next/image';
import { parse } from 'node-html-parser';

/**
 * Supports plain text, images, quote tweets.
 *
 * Needs support for images, GIFs, and replies maybe?
 */
export default function Tweet(props) {
  const {
    full_text,
    id,
    created_at,
    retweet_count,
    favorite_count,
    referenced_tweets,
    entities,
    coordinates,
    source
  } = props;

  const author = {
    username: 'ryck',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/458896478476328960/3z7N1TRP_400x400.jpeg'
  };
  const authorUrl = `https://twitter.com/${author.username}`;
  const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
  const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
  // const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
  const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;
  const createdAt = new Date(created_at);

  const formattedText =
    full_text &&
    Autolinker.link(full_text, {
      mention: 'twitter',
      hashtag: 'twitter',
      className: 'tweet'
    });
  const quoteTweet =
    referenced_tweets && referenced_tweets.find((t) => t.type === 'quoted');

  const parsedSource = parse(source);
  const sourceLink = source && parsedSource.querySelector('a');
  const sourceText = source && sourceLink.rawText;
  const sourceHref = source && sourceLink.attributes;

  return (
    <div
      className="w-full px-6 py-4 my-4 border border-gray-300 rounded dark:border-gray-800"
      id={id}
    >
      <div className="flex items-center">
        <a
          className="flex w-12 h-12"
          href={authorUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt={author.username}
            height={48}
            width={48}
            src={author.profile_image_url}
            className="rounded-full"
          />
        </a>
        <a
          href={authorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col ml-4 author"
        >
          <span
            className="flex items-center font-bold text-gray-900 dark:text-gray-100 leading-5"
            title={author.name}
          >
            {author.name}
            {author.verified ? (
              <svg
                aria-label="Verified Account"
                className="inline w-4 h-4 ml-1 text-blue-500 dark:text-white"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </g>
              </svg>
            ) : null}
          </span>
          <span className="text-gray-500" title={`@${author.username}`}>
            @{author.username}
          </span>
        </a>
        <a
          className="ml-auto"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="328 355 335 276"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 630, 425    A 195, 195 0 0 1 331, 600    A 142, 142 0 0 0 428, 570    A  70,  70 0 0 1 370, 523    A  70,  70 0 0 0 401, 521    A  70,  70 0 0 1 344, 455    A  70,  70 0 0 0 372, 460    A  70,  70 0 0 1 354, 370    A 195, 195 0 0 0 495, 442    A  67,  67 0 0 1 611, 380    A 117, 117 0 0 0 654, 363    A  65,  65 0 0 1 623, 401    A 117, 117 0 0 0 662, 390    A  65,  65 0 0 1 630, 425    Z"
              style={{ fill: '#3BA9EE' }}
            />
          </svg>
        </a>
      </div>
      <div
        className="mt-4 mb-1 text-lg leading-normal text-gray-700 whitespace-pre-wrap dark:text-gray-300"
        dangerouslySetInnerHTML={{
          __html: formattedText
        }}
      ></div>
      {entities && entities.media && entities.media.length ? (
        <div className="my-2">
          {entities.media.map((m) => (
            <Image
              key={m.id}
              alt={full_text}
              height={m.sizes.large.h}
              width={m.sizes.large.w}
              src={m.media_url_https}
              className="rounded"
            />
          ))}
        </div>
      ) : null}
      {quoteTweet ? <Tweet {...quoteTweet} /> : null}
      <a
        className="mr-2 text-sm text-gray-500"
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <time
          title={`Time Posted: ${createdAt.toUTCString()}`}
          dateTime={createdAt.toISOString()}
        >
          {format(createdAt, 'H:mm - d/MM/y')}
        </time>
      </a>
      {source && sourceText && sourceHref && (
        <>
          ·
          <a
            className="ml-2 text-sm text-gray-500"
            href={sourceHref.href || `#`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sourceText || ''}
          </a>
        </>
      )}
      <div className="flex mt-2 text-gray-700 dark:text-gray-300">
        <a
          className="flex items-center mr-4 text-gray-500 hover:text-green-600 transition duration-300"
          href={retweetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>{comma(retweet_count)}</span>
        </a>
        <a
          className="flex items-center mr-4 text-gray-500 hover:text-red-600 transition duration-300"
          href={likeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>{comma(favorite_count)}</span>
        </a>
        {coordinates && coordinates.coordinates && (
          <a
            className="flex items-center text-gray-500 hover:text-red-600 transition duration-300"
            href={`https://www.google.com/maps/search/?api=1&query=${coordinates.coordinates[1]},${coordinates.coordinates[0]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
