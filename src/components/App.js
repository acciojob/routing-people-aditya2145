import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ItemList />} />
                    <Route path="/users/:id" element={<ItemDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
