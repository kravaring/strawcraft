import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { Main } from '../../routes/Main';

export const Layout = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Route exact path="/" component={Main}/>
            </Router>
        </>
    );
};
