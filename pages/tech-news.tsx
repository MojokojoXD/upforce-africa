import { useState,useEffect,Fragment } from 'react';
import type { GetStaticProps } from 'next';
import { getStories } from '../utils/blog-fns';
import type { Article } from '../utils/types/techNews';
import { getStoriesDB } from '../utils/mongoConfig';
import NewsCard from '../components/techs-news/NewsCard';
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/outline';
import Spinner from '../components/misc/Spinner';
import { Transition } from '@headlessui/react';
import ArticleDisplay from '../components/techs-news/ArticleDisplay';
import { useFetchStories } from '../components/customHooks/hooks';


interface TechNewsProps {
    stories: Article[];
}

export const getStaticProps:GetStaticProps<TechNewsProps> = async(  ) => {

    const stories = await getStoriesDB()
    
    return {
        props:{
            stories: stories,
        },
    }
}


export default function TechNews( {stories}:TechNewsProps ){
    const [currentNews,setCurrentNews] = useState<Article[]>(stories)
    const [newsOffset,setNewsOffset] = useState(0);
    // const [loading,setLoading] = useState(false);
    const [showArticle,setShowArticle] = useState<{
        toggle:boolean;
        index: number | undefined
    }>({
        toggle:false,
        index: undefined
    })
    const [updatedStories,loading,error] = useFetchStories(newsOffset);

    const increment = () =>{
        if(currentNews.length < 9){
            return
        }
        setNewsOffset(prevState => prevState + 9);
    }

    const decrement = () => {
        if(newsOffset > 0){
            setNewsOffset(prevState => prevState - 9);
        }
    }

    const toggleArticle = (index:number) => {
        setShowArticle(prevState => ({
            toggle: !prevState.toggle,
            index: index
        }))
    }

    useEffect(()=>{
        const newsBox = document.getElementById('news-box');
        if(newsOffset !== 0){
            newsBox?.scrollIntoView({behavior:'smooth'})
            setCurrentNews(updatedStories as Article[])
        }else {
            document.body.scrollIntoView({behavior:"smooth"});
            setCurrentNews(stories)
        }
    },[newsOffset,setCurrentNews,updatedStories,stories])

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
        <div className='px-2 sm:px-6 lg:px-8' id='news-box'>
            
                <Transition
                 as='div'
                 show={showArticle.toggle}
                 enter='transition-opacity duration-1000 ease-in-out'
                 enterFrom='opacity-0'
                 enterTo='opacity-100'
                 leave='transition-opacity duration-500 ease-in-out'
                 leaveFrom='opacity-100'
                 leaveTo='opacity-0'
                >
                    <ArticleDisplay toggleArticle={toggleArticle} story={currentNews[showArticle.index as number]}/> 
                </Transition>
                
                

                <Transition
                 as={Fragment}
                 show={!showArticle.toggle}
                 enter='transition duration-1000 ease-in-out'
                 enterFrom='opacity-0'
                 enterTo='opacity-100'
                 leave='transition duration-500 ease-in-out'
                 leaveFrom='opacity-100'
                 leaveTo='opacity-0'
                >
                    <div>
                        <h2>Latest tech news in Africa</h2>
                        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-screen auto-rows-max'>
                            {
                                loading ? <Spinner/> : 
                                currentNews.map((s,index) => <NewsCard key={s.articleId} article={s} index={index} toggleArticle={toggleArticle}/>)
                            }
                        </div>
                        <div className='flex justify-around mt-14'>
                            <button onClick={decrement} className='btn btn-primary btn-circle btn-outline' disabled={newsOffset === 0}>
                                <ChevronLeftIcon className='h-5 w-5'/>
                            </button>
                            <button onClick={increment} className='btn btn-primary btn-circle btn-outline' disabled={currentNews.length < 9}>
                                <ChevronRightIcon className='h-5 w-5'/>
                            </button>
                        </div>
                    </div>
                </Transition>
        </div>
      </div>
    </div>
    )
}