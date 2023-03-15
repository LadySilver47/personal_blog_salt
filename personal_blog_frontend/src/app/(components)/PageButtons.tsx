'use client';

import { PageButtonProps } from '@/(props)/props';
import { usePathname, useRouter } from 'next/navigation';
import  './(css)/pagebuttons.css'

const PageButtons = (props: PageButtonProps) => {
    const {first, last, searchParams} = props;
    const pathname = usePathname();
    const router = useRouter();

      const forward = () => {
        searchParams?.page ? router
        .push(pathname + "?page=" + (parseInt(searchParams.page)+1).toString())
        :
        router
        .push(pathname + "?page=" + 1)
      }

      const backward = () => {
        router
        .push(pathname + "?page=" + (parseInt(searchParams!.page as string)-1).toString())
      }


return (
<div className="PageButtons__buttoncontainer">
    {first && (    <>
    <button 
        className="PageButtons__previousPage--disabled"
        disabled>
            Previous</button>
            <button 
    className='Pagebuttons__nextPage'
    onClick={forward}>
        Next
        </button>
        </>)}
    {last && (    <>
    <button 
        className="PageButtons__previousPage"
        onClick={backward}>
            Previous</button>
            <button 
    className='Pagebuttons__nextPage--disabled'
    disabled>
        Next
        </button>
        </>)}
    {(!first && !last) && (
    <>
    <button 
        className="PageButtons__previousPage"
        onClick={backward}>
            Previous</button>
            <button 
    className='Pagebuttons__nextPage'
    onClick={forward}>
        Next
        </button>
        </>
)}
</div>
)
}
export default PageButtons