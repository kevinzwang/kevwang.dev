import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

/**
 * like a Link but it smooth scrolls to hashes on the same page
 */
export default function ScrollLink({href, children}) {
  const router = useRouter()
  const url = new URL("http://localhost" + href); // localhost here just so it parses correctly

  const handleClick = () => {
    document
      .getElementById(url.hash.substring(1))
      .scrollIntoView({ behavior: 'smooth' })
  }

  if (url.hash == '' || url.pathname != router.pathname) {
    return (
      <Link href={href}>{children}</Link>
    )
  } else {
    return React.cloneElement(children, { onClick: handleClick })
  }
}