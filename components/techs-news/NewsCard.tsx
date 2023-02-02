import * as React from 'react';
import type { Article } from '../../utils/types/techNews';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UserCircleIcon,LinkIcon } from '@heroicons/react/24/solid';

interface NewsCardProps {
  article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <div className='max-w-sm py-3.5 border rounded-md bg-gradient-to-br from-gray-100 to-purple-100 h-fit'>
      <div className='mx-2.5'>
        <p className='text-xs mb-1 text-gray-500'>
            {formatArticleDate(article.pubDate)}
        </p>
      </div>
      <div>
        <div className='float-right ml-1 mr-2 rounded overflow-hidden'>
            <LazyLoadImage
            src={article.imageUrl}
            height={80}
            width={80}
            effect='blur'
            />
        </div>
        <div className='mx-2.5'>
            <h1 className='text-base font-semibold text-gray-800'>{article.title}</h1>

            <div className='flex text-purple-700 my-1'>
            <div className='mr-3 flex items-center'>
                <LinkIcon className='h-4 w-4 mr-1'/>
                <p className='text-sm font-semibold'>{article.source.domain}</p>
            </div>
            {article.authorsByline.length > 0 && (
                <div>
                <UserCircleIcon className='h-4 w-4 inline-block' />
                <p className='inline-block text-xs ml-1'>
                    {article.authorsByline}
                </p>
                </div>
            )}
            </div>
            <div className='mt-2'>
                <p className='text-gray-600 text-sm w-[97%] mr-3 min-h-[14]'>{article.description}</p>
            </div>
        </div>
      </div>
    </div>
  );
}


function formatArticleDate(date:string){
    return new Date(date).toDateString()
}