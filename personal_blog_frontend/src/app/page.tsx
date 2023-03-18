'use client';

import '@/(css)/globals.css'
import { useEffect, useState } from 'react';
import { BlogsPage, Content} from '@/(interfaces)/interfaces';
import PageButtons from './(components)/PageButtons';
import BlogCard from './(components)/BlogCard';
import HomeNav from './(components)/HomeNav';

export default function Home({searchParams}: {searchParams?: {page?: string}}) {
  const [blogContent, setBlogContent] = useState<Content[]>();
  const [blogs, setBlogs] = useState<BlogsPage>();

  const getBlogPosts = async() => {
    const url = `http://localhost:9001/api/blogs${searchParams?.page ? `?page=${searchParams.page}` : ''}`;
    const data = await fetch(url, { next: { revalidate: 60 } })
    
    const result = await data.json();
    setBlogContent(result.content);
    setBlogs(result);
  }

  useEffect(() => {
    getBlogPosts()
  }, [searchParams])

  return (
   <section>
    <HomeNav />
    <ul className='home__ul'>
      {blogContent?.map((element) => {
        return (
          <BlogCard 
          id={element.id}
          title={element.title}
          body={element.body}
          date={element.date.toString()}
          keywords={element.keywords}
          key={element.id}/>
        )
      })}
    </ul>
    <PageButtons searchParams = {searchParams} first ={blogs?.first} last = {blogs?.last}/>
   </section>
  )

}
