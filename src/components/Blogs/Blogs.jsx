import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
import { Container } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {

    useTitle('Blogs')

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