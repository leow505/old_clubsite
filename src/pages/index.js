import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Events from './Events';
import Contact from './Contact';
import Error from './Error';
import Footer from './Footer';

import Navbar from './Navbar';
const RouterSetup = () => {
    return <Router>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Events />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="*">
                <Error />
            </Route>
        </Switch>
        <Footer />
    </Router>
};

export default RouterSetup;