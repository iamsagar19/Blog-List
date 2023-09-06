import { Card, CardContent } from '@mui/material'
import React from 'react'


const Blog = ({ title, body, id }) => {
    

  return (
    <div className="blog">
        <Card sx={{maxWidth: '100%', height: 240, background: 'white'}}>
        <CardContent>
        <h3>{title}</h3>
        <p>{body}</p>
        </CardContent>
        </Card>
      
    </div>
  )
}

export default Blog
