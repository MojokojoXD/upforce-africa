import { useEffect } from 'react';
import type { Article } from '../../utils/types/techNews';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { formatArticleDate } from '../../utils/fns';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ArticleDisplayProps {
  story: Article;
  toggleArticle(index: number | undefined): void;
}

export default function ArticleDisplay({
  story,
  toggleArticle,
}: ArticleDisplayProps) {
  useEffect(() => {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className='min-h-screen relative mx-5 px-3 max-w-5xl'>
      <div className='h-full absolute border-l left-0 -ml-3 border-purple-400/50'></div>
      <button
        onClick={() => toggleArticle(undefined)}
        className='fixed left-[80%] mr-5 btn btn-circle btn-ghost btn-md transform translate-y-1/2 shadow z-50'
      >
        <XMarkIcon className='h-7 w-7' />
      </button>
      {!story ? (
        <div></div>
      ) : (
        <div className='ml-3 space-y-3'>
            <a href={story.url} rel='noreferrer' target='_blank'>
                <h2 className='text-purple-700 hover:underline'>{story.source.domain}</h2>
            </a>
          <h1 className='text-3xl font-bold pr-3 max-w-prose sm:text-3xl md:text-7xl -ml-5'>
            {story.title}
          </h1>
          <div>
            {
               story.authorsByline && <h2 className='text-purple-700 inline-block'>{story.authorsByline} <span className='text-gray-900'>&#183;</span></h2>
            }
            <h2 className='inline-block ml-1'>{formatArticleDate(story.pubDate)}</h2>
          </div>
          <blockquote className='max-w-prose hidden md:block italic font-light'>
            {story.summary}
          </blockquote>
          <LazyLoadImage src={story.imageUrl} className='-ml-9 shadow md:shadow-lg rounded-r' effect='blur'/>
          <p className='whitespace-pre-wrap max-w-prose pt-5 text-lg font-light first-line:text-xl first-line:font-normal first-letter:text-5xl first-letter:text-purple-500 first-letter:font-bold'>
            {story.content}
          </p>
        </div>
      )}
    </div>
  );
}
