import React from 'react'
import NavLeft from '../navbar/NavLeft'
import NavRight from '../navbar/NavRight'
import PostPage from '../post/PostPage'
import Styles from "./Home.module.css";

function Home() {
  
  return (
      <div className={Styles.container}>
          <NavLeft />
          <PostPage />        
          <NavRight />
      </div>
  )
}

export default Home