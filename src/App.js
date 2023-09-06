import './App.css';
import BlogList from './Components/BlogList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import BlogDetail from './Components/BlogDetail';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      
      axios.get(url).then((res) => {
          setData(res.data);
          setLoading(false);
      }).catch((err) => {
          setError(err); 
          setLoading(false);
      })

},[])

  if (loading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error: {error.message}</div>;
}


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={
        <>
        <div className='blog-title'>Blog App</div>
        <BlogList blogs={data} blogsPerPage={9} />
        </>
      } />
      <Route path='/blog/:id' element={
        <>
        <BlogDetail />
        </>
      } />
      
      </Routes>
    </div>
  );
}

export default App;
