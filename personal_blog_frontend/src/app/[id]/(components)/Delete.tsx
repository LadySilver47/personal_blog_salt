'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation';

interface deleteIdProp{
    id: string;
}

const Delete = ({id}: deleteIdProp) => {

    const router = useRouter()

    const deleteById = async(event: React.MouseEvent) => {
        event.preventDefault()
                const fetchRespone = await fetch(`http://localhost:9001/api/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Access-Control-Allow-Origin' : '*'

                    }})
                router.push("/?page=0")
    }

  return (
    <div className="Blog__delete-container">
        <button onClick={deleteById} className='Blog__delete-button'>Delete</button>
    </div>
  )
}

export default Delete