import React from 'react'
import { Link } from 'react-router-dom'


const NotFoundPage = () => {
  return (
    <>
    <div>404 - Page not found</div>
    <Link to="/" className={styles.link}>Back to HOME</Link>
    </>
  )
}

export default NotFoundPage