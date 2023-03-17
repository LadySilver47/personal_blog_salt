'use client';

import { AddPostForm } from '../(components)/AddPostForm';

export default function Blogs() {

  return (
   <section className='postblog__section'>
    <h2 className='postblog__header'>Add a blog post!</h2>
    <AddPostForm/>
   </section>
  )

}
