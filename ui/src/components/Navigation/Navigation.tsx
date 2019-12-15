import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav>
            <li><Link to={"/"}>Main</Link></li>
            <li><Link to={"/works"}>Works</Link></li>
        </nav>
    );
};