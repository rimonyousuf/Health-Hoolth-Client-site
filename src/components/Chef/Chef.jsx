import React, { useState } from 'react';
import './Chef.css'
import { Button, Image } from 'react-bootstrap';

const Chef = ({ chef }) => {

    const [seeMore, setSeeMore] = useState(false);
    const handleSeeMore = () => {
        setSeeMore(true);
    }
    const handleSeeLess = () => {
        setSeeMore(false);
    }

    const { name, speciality, image, story } = chef

    return (
        <div className='text-center border rounded-4 m-4 p-2'>
            <Image className='chef-img mb-2' src={image} />
            <h3>{name}</h3>
            {!seeMore &&
                <Button onClick={handleSeeMore} variant='success'>See more...</Button>
            }

            {seeMore &&<>
                <p className='fs-5'><span className='fw-bold'>Speciality:</span>{speciality}</p>
                <p className='text-start'>{story}</p>
                <Button onClick={handleSeeLess} variant='danger'>See less</Button>
                </>
            }
        </div>
    );
};

export default Chef;