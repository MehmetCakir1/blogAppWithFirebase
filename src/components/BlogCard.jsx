import React from 'react'
import { useGetData } from '../helpers/firebase';

const BlogCard = () => {

  const {isLoading,blogList}=useGetData()
  
  console.log(blogList);
  return (
    <div>
      
    </div>
  )
}

export default BlogCard