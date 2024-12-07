import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setItems(data);
            } catch (e) {
                console.log("Error in fetching data", e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <h1>User List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link to={`/users/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ItemList;
