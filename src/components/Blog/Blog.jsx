import React from 'react';
import './Blog.css'
import { Image } from 'react-bootstrap';

const Blog = ({blog}) => {

    const {category,title,description,writer,image} = blog;

    return (
        <div className='d-flex justify-content-evenly align-items-center gap-4 my-4'>
            <Image className='blog-img shadow bg-body-tertiary rounded' src={image} />
            <div className="blog w-50">
                <h3 className='text-body-secondary'>{title}</h3>
                <p className='mb-4 text-body-secondary'>Category: {category}</p>
                <p className='text-body-tertiary'>{description}</p>
                <p className='text-secondary-emphasis'><small>---{writer}</small></p>
            </div>
        </div>
    );
};

export default Blog;