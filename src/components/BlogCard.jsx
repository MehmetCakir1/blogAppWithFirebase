import React from 'react'
import { useGetData } from '../helpers/firebase';
import SingleBlog from './SingleBlog';

const BlogCard = () => {

  const {blogList}=useGetData()
  // console.log(blogList);
  return (
    <div className='row container m-auto  d-flex justify-content-center align-items-center mt-3'>
      {
        blogList?.map((item)=>{
          return(
            <SingleBlog item={item}/>
          )
        })
      }
    </div>
  )
}

export default BlogCard

// REACT_APP_apiKey=AIzaSyDB3Jso_Al6t2i3znInMs-h47BEibYfvng
// REACT_APP_authDomain=blogapp-47d01.firebaseapp.com
// REACT_APP_databaseURL=https://blogapp-47d01-default-rtdb.firebaseio.com
// REACT_APP_projectId=blogapp-47d01
// REACT_APP_storageBucket=blogapp-47d01.appspot.com
// REACT_APP_messagingSenderId=538212507459
// REACT_APP_appId=1:521423729906:web:ef063a5a161c08541a4c6b
