'use client'

import  './../(css)/addpostform.css'
import { useState, useRef} from 'react';
import { BlogPost } from '@/(interfaces)/interfaces';
import { useRouter } from 'next/navigation';

export const AddPostForm = () => {
    const titleRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLTextAreaElement>(null);
    const tagsRef = useRef<HTMLInputElement>(null);
    const [blogPost, setBlogPost] = useState<BlogPost>();
    const router = useRouter();

    const changeForm = (event: React.ChangeEvent) =>{
        const title = titleRef.current!.value;
        const body = bodyRef.current!.value;
        const tags = tagsRef.current!.value.split(",");
        setBlogPost({title: title, body: body, keywords: tags})
    }

    const addBlogPost = async(event: React.FormEvent) => {
        event.preventDefault()
                const fetchRespone = await fetch(`http://localhost:9001/api/blogs`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin' : '*'
                    },
                    body: JSON.stringify(blogPost)
                })
                const data = await fetchRespone.json();
                router.push("/" + data.id)
    }

  return (
    <div className="AddPostForm__form-container">
        <form 
        onSubmit={addBlogPost}
        className="AddPostForm__form">
            <label 
            htmlFor="first">Title:</label>
            <input 
            ref={titleRef}
            placeholder="title" 
            name="title" 
            className="form__input" 
            type="text"
            onChange={changeForm} 
            required/>
            <label 
            htmlFor="body">Body:</label>
            <textarea
            ref={bodyRef}
            placeholder="What's your story?"
            name="body"
            rows={25}
            required
            onChange={changeForm}>
            </textarea>
            <label htmlFor="tags">Tags:</label>
            <input 
            ref={tagsRef}
            className='AddPostForm__keywords'
            placeholder="Add tags (comma seperated)" 
            type="text" 
            name="tags"
            onChange={changeForm}/>
            <button 
            type='submit'
            className='AddPostForm__button'>Submit</button>
        </form>
    </div>
  )
}
