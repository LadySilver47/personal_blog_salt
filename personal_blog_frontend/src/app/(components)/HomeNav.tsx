'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import { Content } from '@/(interfaces)/interfaces';
import '@/(css)/homenav.css'

const HomeNav = () => {
const [searchId, setSearchId] = React.useState<string>()
const searchRef = React.useRef<HTMLInputElement>(null)
const router = useRouter();

const handleChange = (event: React.ChangeEvent) => {
  const search = searchRef.current?.value;
  setSearchId(search)
}



const handleSubmit = async(event: React.FormEvent) => {
  event.preventDefault();

const res = await fetch(`http://localhost:9001/api/blogs/all`);
const data = await res.json();


  const find = data.filter((element:Content) => 
    element.id === searchId || 
    element.title === searchId)
.map((filtered: { id: string}) => {return filtered.id})

router.push(`/${find}`);

}

  return (
    <section className='HomeNav__section'>
      <h2 className='nav__h2'>Home Page</h2>
      <form onSubmit={handleSubmit} 
      className='HomeNav__form'>
        <input
        className='HomeNav__search'
        onChange={handleChange}
        ref={searchRef}
        type="text" 
        placeholder='search'
        />
        <button className='Homenav__button' type='submit'>Search</button>
        </form>
    </section>
  )
}

export default HomeNav