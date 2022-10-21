import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const FriendDetails = () => {
    const { friendId } = useParams();

    const [friend, setFriend] = useState([]);
    useEffect(() => { fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`).then(res => res.json()).then(data => setFriend(data)) }, []);
    const { name, phone, website, company, address } = friend;

    const history = useHistory()
    const handleBack = () => {
        history.push('/friends')
    }
    return (
        <div>
            <button onClick={handleBack}>Back</button>
            <h2>My name is {name}</h2>
            <h5>Contact me {phone}</h5>
            <p>Visit my site {website}</p>
            <p><strong>City</strong> {address?.city}</p>
            <p><strong>Company</strong> {company?.name}</p>
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default FriendDetails;