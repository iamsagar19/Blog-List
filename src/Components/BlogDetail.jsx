import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { Button, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BlogDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);

    useEffect(() => {
        console.log("location",location, typeof(location))
        const value = location.pathname.split('/blog/')
        const url = `https://jsonplaceholder.typicode.com/posts/${value[1]}`

        axios.get(url).then((res) => {
            setData([res.data]);
            console.log("datadetail",res.data,res.data.title)
            setLoading(false);
            setTitle(res.data.title);
            setBody(res.data.body);

        }).catch((err) => {
            setError(err); 
            setLoading(false);
        })
        
    },[])

    useEffect(() => {

        console.log("title",title)
    },[title])

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleBack = () => {
        navigate('/')
    }

  return (
    <div>
        {title  && (
            <>
            <Button onClick={handleBack} sx={{margin: '24px'}} variant="contained"><ArrowBackIcon /> Back</Button>
            <div className='blog-title'>{title}</div>
            <Card sx={{maxWidth: '100%', background: 'white', margin: 3}}>
            <CardContent>
                <p>{body}</p>
                </CardContent>
            </Card>
            </>
        )}
    </div>
  )
}

export default BlogDetail
