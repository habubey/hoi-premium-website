import React from 'react'
import classes from './Blog.module.css'
import Blogbox from './Blogbox'
const Blog = () => {
  return (
    <div className={classes.blogheader}>

        <Blogbox/>
        <Blogbox/>
        <Blogbox/>
        <Blogbox/>
      
      
      
    </div>
  )
}

export default Blog