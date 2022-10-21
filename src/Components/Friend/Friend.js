import React from 'react';

const Friend = (props) => {
    const { name, phone, website, address } = props.friend;
    return (
        <div style={{ border: '2px solid aqua', borderRadius: '10px' }}>
            <h2>My name is {name}</h2>
            <h5>Contact me {phone}</h5>
            <p>Visit my site {website}</p>
            <p>City {address.city}</p>
        </div>
    );
};

export default Friend;