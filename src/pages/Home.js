import React, { useState } from 'react';
import AddPost from '../components/AddPost';
import Logo from '../components/Logo';
import Post from '../components/Post';

const Home = () => { 
  const [posts, setPosts] = useState([]);
  return (
    <div className='contener'>
      <Logo />
      <AddPost posts={posts} setPosts={setPosts}/>
      <Post posts={posts} setPosts={setPosts}/>
    </div>
  );
};

export default Home;