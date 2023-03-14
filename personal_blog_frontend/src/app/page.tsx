'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { BlogsPage, Content} from '@/(interfaces)/interfaces';
import PageButtons from './(components)/PageButtons';
import BlogCard from './(components)/BlogCard';


export default function Home({searchParams}: {searchParams?: {page?: string}}) {
  const [blogContent, setBlogContent] = useState<Content[]>();
  const [blogs, setBlogs] = useState<BlogsPage>();

  const getBlogPosts = async() => {
    let data;
    searchParams?.page ? 
      data = await fetch(`http://localhost:9001/api/blogs?page=${searchParams?.page}`)
    :
      data = await fetch(`http://localhost:9001/api/blogs`)
    
    const result = await data.json();
    setBlogContent(result.content);
    setBlogs(result);
  }

  useEffect(() => {
    getBlogPosts()
  }, [searchParams])

  return (
   <section>
    <h2 className='home__header'>Hello World</h2>
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
