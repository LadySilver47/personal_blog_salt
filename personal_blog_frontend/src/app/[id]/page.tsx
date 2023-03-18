'use client'

import { Content } from '@/(interfaces)/interfaces';
import { useRouter, notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Delete from './(components)/Delete';
import '@/(css)/id.css'


const Blog = ({params}: {params: { id: string }}) => {
  const [data, setData] = useState<Content>();

  const getBlog = async() => {
    const url = `http://localhost:9001/api/blogs/${params.id}`
    const result = await fetch(url)
    const data = await result.json();
    setData(data);
  }

  useEffect(() => {
      getBlog()
      .catch(console.error);
    }, [])

  const router = useRouter();

  return (<section 
    className='Blog__blog-section'>
        <h2 className='blog__title'>{data?.title}</h2>
        <article className='blog__body'>
          <pre className='blog__text'>
          {data?.body}
          </pre>
        </article>
        <div className="input__container">
        <input
        readOnly
        type="text"
        value={data?.date?.toString()}
        className='blog__date' />
        <input
        readOnly
        type="text" 
        value={data?.keywords}
        className='blog__keywords'/>
        </div>
        <div className="Blog__button-container">
        <button 
        onClick={() => router.push("/" + params.id + "/edit")}
        className="Blog__edit-button">
          Edit
        </button>
        <Delete id={data?.id}/>
        </div>
    </section>
  )

}

export default Blog;