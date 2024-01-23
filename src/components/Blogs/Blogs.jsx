import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
import { Container } from 'react-bootstrap';

const Blogs = () => {

    const blogs = useLoaderData();

    return (
        <Container>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
        </Container>
    );
};

export default Blogs;