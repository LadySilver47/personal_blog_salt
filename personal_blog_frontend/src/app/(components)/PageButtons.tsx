'use client';

import { PageButtonProps } from '@/(props)/props';
import { usePathname, useRouter } from 'next/navigation';
import  '@/(css)/pagebuttons.css'

const PageButtons = (props: PageButtonProps) => {
    const {first, last, searchParams} = props;
    const pathname = usePathname();
    const router = useRouter();

      const forward = () => {
        router.push(`${pathname}?page=${parseInt(searchParams?.page || '1') + 1}`);
      };

      const backward = () => {
        router.push(`${pathname}?page=${parseInt(searchParams?.page || '1') - 1}`);
      };


return (
<div className="PageButtons__buttoncontainer">
  <>
    <button 
        className="PageButtons__previousPage"
        disabled={first}
        onClick={backward}>
            &#60; Previous</button>
            <button 
    className='Pagebuttons__nextPage'
    disabled={last}
    onClick={forward}>
        Next &#62;
        </button>
        </>
</div>
)
}
export default PageButtons