import React from 'react'
import { Link } from 'react-router-dom'
import s from './NotFoundPage.module.css'
import NotFoundImg from '../../assets/images/404.avif'



const NotFoundPage = () => {
  return (
    <div className={s.container}>
       <Link to="/" className={s.link}>Back to HOME</Link>
    <img src={NotFoundImg} alt="404" width="500"/>
 
    </div>
  )
}

export default NotFoundPage