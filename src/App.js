import './styles/App.css';
import iconImg from './images/barber-shop.svg';
import firstImg from './images/firstImg.jpg';
import secondImg from './images/secondImg.jpg';
import thirdImg from './images/thirdImg.jpg';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import React, {useState} from "react";

function App() {

    const [modalVisible, setModalVisible] = useState(false)
    const [choice, setChoice] = useState("main")

    const exit = () => {
        setModalVisible(false)
        setChoice("main")
    }

    return (
        <div className="app">
            <Header modalVisible={modalVisible} setModalVisible={setModalVisible} img={iconImg}/>
            <Content modalVisible={modalVisible} setModalVisible={setModalVisible}
                     firstImg={firstImg} secondImg={secondImg} thirdImg={thirdImg}
                     choice={choice} setChoice={setChoice} exit={exit}
            />
        </div>
    );
}

export default App;
