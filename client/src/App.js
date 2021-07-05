import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import PostsForm from './components/PostsForm';
import PostsDisplay from './components/PostsDisplay';

const App =() => {

 const [posts, setPosts] = useState([])
 const getPosts = () => {
   console.log('its working')
   axios.get(`http://localhost:5000/api/posts`)
.then(res => {
  console.log("API response", res.data);
  setPosts(res.data);
 })
 .catch(err => {
   console.log(`${err}`)
 });

};

  

  return (
    <div className="App">
      <h1>POSTS API</h1>
      <PostsForm getPostsBtn={getPosts} />
      <PostsDisplay postsDisplay={posts} />
    </div>
  );
}

export default App;
