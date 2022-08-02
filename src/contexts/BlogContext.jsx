import { ref, update } from "firebase/database";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { db } from "../helpers/firebase";
import { AuthContext } from "./AuthContext";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  // const { currentUser } = useContext(AuthContext);

  const initialValues = {
    title: "",
    url: "",
    content: "",
    userName: "",
    like: 0,
    date:new Date().toLocaleDateString("tr-TR")
  };
  const [blog, setBlog] = useState(initialValues);

  // console.log(blog);

  const editBlog = (blog) => {
    // setBlog({ id, title, url, content, userName: currentUser.displayName });
    setBlog({...blog, id:blog.id, title:blog.title, url:blog.url, content:blog.content});
    // setBlog(blog);
  };

  return (
    <BlogContext.Provider value={{ blog, setBlog, initialValues, editBlog,blog}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
