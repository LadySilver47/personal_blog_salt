import { BlogFormProps } from '@/(props)/props'
import React from 'react'

const BlogForm = ({titleRef, bodyRef, tagsRef, title, body, keywords, changeForm, addBlogPost}: BlogFormProps) => {
  return (
    <div className="AddPostForm__form-container">
    <form 
    onSubmit={addBlogPost}
    className="AddPostForm__form">
        <label 
        className='form__labels'
        htmlFor="first">Title:</label>
        <input 
        ref={titleRef}
        placeholder="title" 
        name="title" 
        className="form__input" 
        type="text"
        onChange={changeForm} 
        required
        defaultValue={title}/>
        <label 
        className='form__labels'
        htmlFor="body">Body:</label>
        <textarea
        className='form__textarea'
        ref={bodyRef}
        placeholder="What's your story?"
        name="body"
        rows={25}
        required
        onChange={changeForm}
        defaultValue={body}>
        </textarea>
        <label 
        className='form__labels'
        htmlFor="tags">Tags:</label>
        <input 
        ref={tagsRef}
        className='AddPostForm__keywords'
        placeholder="Add tags (comma seperated)" 
        type="text" 
        name="tags"
        onChange={changeForm}
        defaultValue={keywords}/>
        <div className="form-button__container">
        <button 
        type='submit'
        className='AddPostForm__button'>Submit</button>
        </div>
    </form>
</div>
  )
}

export default BlogForm