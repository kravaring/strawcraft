import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { Main } from '../../routes/Main';
import { Locale } from '../Locale';

export const Layout = () => {
    return (
        <>
            <Locale/>
            <Router>
                <Navigation />
                <Route exact path="/" component={Main}/>
            </Router>
        </>
    );
};
