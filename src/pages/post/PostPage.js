import React from 'react'
import Styles from "./PostPage.module.css";
import PostShare from './PostShare';
import PostCard from './PostCard';
import Stories from './Stories';

function PostPage() {
  return (
    <div className={Styles.PostPage}>
        <Stories />
        <PostShare /> 
        <PostCard />
    </div>
  )
}

export default PostPage