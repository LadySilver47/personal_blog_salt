import Image from 'next/image'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import styles from './page.module.css'


const getBlogPosts = async() => {
  const data = await fetch(`http://localhost:9001/api/blogs`);
  const result = await data.json();
  return result;
}

export default async function Home() {

  const data = await getBlogPosts();

  return (
   <section>
    <h1>Hello World</h1>
    <ul>
      {data.map((element) => {
        return (
          <li key={element.id}>{element.title}</li>

        );
      })}
    </ul>
   </section>
  )

}
