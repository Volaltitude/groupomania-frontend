import React from 'react';
import AddPost from '../components/AddPost';
import Logo from '../components/Logo';
import Post from '../components/Post';

const Home = () => { 
  return (
    <div className='contener'>
      <Logo />
      <AddPost />
      <Post />
    </div>
  );
};

export default Home;