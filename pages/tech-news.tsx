import * as React from 'react';
import type { GetStaticProps } from 'next';
import { getStories } from '../utils/blog-fns';
import type { Article } from '../utils/types/techNews';
import { getStoriesDB } from '../utils/mongoConfig';
import NewsCard from '../components/techs-news/NewsCard';


interface TechNewsProps {
    stories: Article[];
}

export const getStaticProps:GetStaticProps<TechNewsProps> = async(  ) => {

    const stories = await getStoriesDB()
    
    return {
        props:{
            stories: stories,
        }
    }
}


export default function TechNews( {stories}:TechNewsProps ){
    return (
        <div className='relative bg-gradient-to-bl from-violet-500 via-purple-800 to-indigo-900 rounded'>
      <div className='px-6 lg:px-20'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10'>
            <h2 className='text-3xl font-bold leading-7 text-white sm:truncate sm:text-4xl sm:tracking-tighter'>
                Tech News
            </h2>
        </div>
      </div>
      <div className='min-h-screen bg-white py-10 px-6 lg:px-20 text-gray-900'>
        <div className='px-2 sm:px-6 lg:px-8'>
            <h2>Latest tech news in Africa</h2>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    stories.slice(0,9).map(s => <NewsCard key={s.articleId} article={s}/>)
                }
            </div>
        </div>
      </div>
    </div>
    )
}