import './styles/App.css';
import iconImg from './images/barber-shop.svg';
import secondImg from './images/secondImg.jpg';
import thirdImg from './images/thirdImg.jpg';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import React, {useState} from "react";

function App() {
    return (
        <div className="app">
            <Header />
            <Content secondImg={secondImg} thirdImg={thirdImg}/>
        </div>
    );
}

export default App;
