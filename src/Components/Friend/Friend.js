import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    return (
        <div style={{ border: '2px solid aqua', borderRadius: '10px', padding: '10px' }}>
            <h2>My name is {name}</h2>
            <h5>Contact me {phone}</h5>
            <p>Visit my site {website}</p>
            <p>City {address.city}</p>
            <Link to={`/friend/${id}`}>Read More</Link>
        </div>
    );
};

export default Friend;