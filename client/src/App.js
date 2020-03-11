import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App =() => {

  useEffect(() => {
axios.get(`http://localhost:5000/api/posts`)
.then(res => {
  console.log("API response", res)
})

  }, [])

  return (
    <div className="App">
      <h1>POSTS API</h1>
    </div>
  );
}

export default App;
