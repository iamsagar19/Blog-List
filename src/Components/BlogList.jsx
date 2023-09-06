import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';
import { Grid, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogList = ({ blogs, blogsPerPage }) => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleBlogDetail = (id) => {
    console.log("idclick",id)
        navigate(`/blog/${id}`)
  }

    

  return (
    <div>
      <div className="blog-list">
      <Grid container spacing={3}>
      
      {currentBlogs.map((blog,index) => (
        <Grid item xs={12} sm={6} md={4} onClick={() => handleBlogDetail(blog.id)}>
        <Blog key={blog.id} title={blog.title} body={blog.body} id={blog.id} />
        </Grid>
      ))}
      </Grid>
      </div>
      
      
      <Pagination
        className='pageList'
        count={Math.ceil(blogs.length / blogsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default BlogList
