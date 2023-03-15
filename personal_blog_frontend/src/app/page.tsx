'use client';

import './globals.css'
import { useEffect, useState } from 'react';
import { BlogsPage, Content} from '@/(interfaces)/interfaces';
import PageButtons from './(components)/PageButtons';
import BlogCard from './(components)/BlogCard';
import HomeNav from './(components)/HomeNav';

export default function Home({searchParams}: {searchParams?: {page?: string}}) {
  const [blogContent, setBlogContent] = useState<Content[]>();
  const [blogs, setBlogs] = useState<BlogsPage>();

  const getBlogPosts = async() => {
    let data;
    searchParams?.page ? 
      data = await fetch(`http://localhost:9001/api/blogs?page=${searchParams?.page}`, { next: { revalidate: 60 } })
    :
      data = await fetch(`http://localhost:9001/api/blogs`, { next: { revalidate: 60 } })
    
    const result = await data.json();
    setBlogContent(result.content);
    setBlogs(result);
  }

  useEffect(() => {
    getBlogPosts()
  }, [searchParams])

  return (
   <section>
    <HomeNav blogs ={blogContent}/>
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
