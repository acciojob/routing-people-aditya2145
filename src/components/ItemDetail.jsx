import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './loading';

const ItemDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.log("Error fetching user details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <div>User not found.</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
    );
};

export default ItemDetail;
