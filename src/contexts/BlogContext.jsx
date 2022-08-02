import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { AuthContext } from './AuthContext'




export const BlogContext=createContext()



const BlogContextProvider = ({children}) => {
  const {currentUser}=useContext(AuthContext)
  // const [heart,setHeart]=useState(0)

const initialValues={title:"",url:"",content:"",userName:""}
const [blog,setBlog]=useState(initialValues)

// console.log(blog);

const editBlog=(id,title,content,url)=>{
  setBlog({id,title,url,content,userName:currentUser.displayName})
}

// const increaseFav = (blog) =>{
//   if(currentUser.displayName){
//    if(!Object.values(blog.like).includes(blog.id)){         
//        update(ref(db, 'Blog/' + blog.id), {
//        ...blog,
//        count: +blog.count + 1,
//        like: [...blog.like, blog.id]
//    })
//    }else{
//        toastErrorNotify('You can only like a single post once!!!')
//    }
//    }else{
//        toastErrorNotify('You should login first')
//    }
// }
  return (
    <BlogContext.Provider value={{blog,setBlog,initialValues,editBlog}}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider