'use client'

import { Content } from '@/(interfaces)/interfaces';
import { AddPostForm } from '@/app/(components)/AddPostForm'
import { useEffect, useState } from 'react'

const page = ({ params}: {params: { id: string }}) => {
    const [data, setData] = useState<Content>();

    console.log(params.id)

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


  return (
    <AddPostForm
    id={data?.id}
    title={data?.title}
    body={data?.body}
    keywords={data?.keywords}/>
  )
}

export default page