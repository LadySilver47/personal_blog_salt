import { Content } from '@/(interfaces)/interfaces';
import { notFound } from 'next/navigation';
import React from 'react'
import Delete from './(components)/Delete';
import '@/(css)/id.css'

async function getBlog(blogId: string) {
    const res = await fetch(
      `http://localhost:9001/api/blogs/${blogId}`,
      {
        next: { revalidate: 60 },
      }
    );
    if(!res.ok){ return undefined;
    }
    return res.json();
  }

const Blog = async({ params}: {params: { id: string }}) => {

    const data: Content = await getBlog(params.id);

    !data && notFound();


  return (<section 
    className='Blog__blog-section'>
        <h2 className='blog__title'>{data.title}</h2>
        <article className='blog__body'>
          <pre className='blog__text'>
          {data.body}
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
        value={data.keywords}
        className='blog__keywords'/>
        </div>
        <Delete id={data.id}/>
    </section>
  )

}

export default Blog;