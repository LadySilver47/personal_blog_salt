import { BlogProps } from '@/(props)/props'
import Link from 'next/link'
import React from 'react'
import '@/(css)/blogcard.css'


const BlogCard = ({title, body, keywords, date, id}: BlogProps) => {

  return (
    <Link className='blogcard__link' href={`/${id}`}>
    <article className='BlogCard__container'>
          <h2 className='BlogCard__cardTitle'>{title}</h2>
          <article 
          className='BlogCard__BlogBody'
          >
            {body!.length > 40 ? body!.substring(0, 40) + "..." : body}
          </article>
          <div className='blogcard__input-container'>
          <input
              className='BlogCard__date'
              value={date!.toString()}
              readOnly
              type="text" />
         <input
         readOnly
              className='BlogCare__keywords'
              type="text" 
              value={keywords}/>
                        </div>
    </article>
    </Link>
  )
}

export default BlogCard