import * as React from 'react';
import type { Article } from '../../utils/types/techNews';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UserCircleIcon, LinkIcon } from '@heroicons/react/24/solid';
import { formatArticleDate } from '../../utils/fns';

interface NewsCardProps {
  article: Article;
  index: number;
  toggleArticle(index:number | undefined):void;
}

export default function NewsCard({ article,index,toggleArticle }: NewsCardProps) {
  return (
    <div className='max-w-sm py-4 rounded-md bg-gradient-to-br from-gray-100 to-purple-100 group hover:sm:from-gray-800 hover:sm:via-gray-900 hover:sm:to-gray-700 transition-all duration-500 ease-in-out cursor-pointer focus:ring' onClick={()=> toggleArticle(index)}>
      {/* <div className='mx-5'>
        <p className='text-xs mb-1 text-gray-500 group-hover:sm:text-gray-400'>
          {formatArticleDate(article.pubDate)}
        </p>
      </div> */}
      <div className='pt-3'>
        <div className='float-right ml-1 mr-2 rounded overflow-hidden'>
          <LazyLoadImage
            src={article.imageUrl}
            height={80}
            width={80}
            effect='blur'
          />
        </div>
        <div className='mx-5'>
          <h1 className='text-lg font-semibold tracking-tight text-gray-800 group-hover:sm:text-gray-200'>
            {article.title}
          </h1>

          <div className='flex text-purple-700 group-hover:sm:text-purple-300 mt-5'>
            <div className='mr-3 flex items-center'>
              <LinkIcon className='h-4 w-4 mr-1' />
              <p className='text-sm font-semibold'>{article.source.domain}</p>
            </div>
            {article.authorsByline.length > 0 && (
              <div>
                <UserCircleIcon className='h-4 w-4 inline-block' />
                <p className='inline-block text-xs ml-1 font-semibold'>
                  {article.authorsByline}
                </p>
              </div>
            )}
          </div>
          <div className='mt-2'>
            <p className='text-gray-600 text-sm w-[97%] mr-3 min-h-[14] group-hover:sm:text-gray-50 line-clamp-3'>
              {article.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

