'use client'

import Link from "next/link"

const notFound = () => {
  return (
    <section>
            <h1>Something went wrong!</h1>
            <Link href="/?page=0">
            <button>Click here to go home</button>
            </Link>
    </section>
  )
}

export default notFound;