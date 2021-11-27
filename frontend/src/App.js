import React from 'react';
import RoutePath from './Router';
import'./App.css';
import Header from './components/Common/Header';
import Home from './containers/Home';
import Footer from './components/Common/Footer';
function App() {
    return (
        <>
        <Header />
        <RoutePath />
        <Footer/>
       
        </>
    );
}

export default App;
