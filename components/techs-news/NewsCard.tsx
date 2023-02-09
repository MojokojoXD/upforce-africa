import React, { useState } from 'react';
import type { Article } from '../../utils/types/techNews';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UserCircleIcon, LinkIcon } from '@heroicons/react/24/solid';
import { formatArticleDate } from '../../utils/fns';

interface NewsCardProps {
  article: Article;
  index: number;
  toggleArticle(index: number | undefined): void;
}

export default function NewsCard({
  article,
  index,
  toggleArticle,
}: NewsCardProps) {
  return (
    <div
      className='w-full max-w-sm py-4 transition-all duration-300 ease-in-out cursor-pointer focus:ring hover:sm:border-purple-400 px-3.5 h-fit border-b border-stone-200 group'
      onClick={() => toggleArticle(index)}
    >
      <div className='pt-3'>
        <div className='float-right ml-5 mr-2 rounded overflow-hidden'>
          <LazyLoadImage
            src={article.imageUrl}
            height={80}
            width={80}
            effect='blur'
          />
        </div>
        <div>
          <h1
            className='text-lg font-semibold tracking-tight text-gray-800 break-words text-ellipsis group-hover:text-gray-600'
          >
            {article.title}
          </h1>

          <div className='flex text-purple-700 mt-5'>
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
            <p className='text-gray-600 text-sm pr-6 line-clamp-3 group-hover:text-gray-500'>
              {article.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
