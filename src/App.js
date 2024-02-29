import './styles/App.css';
import iconImg from './images/barber-shop.svg';
import firstImg from './images/firstImg.jpg';
import secondImg from './images/secondImg.jpg';
import thirdImg from './images/thirdImg.jpg';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
function App() {
  return (
    <div className="app">
        <Header img={iconImg}/>
        <Content firstImg={firstImg} secondImg={secondImg} thirdImg={thirdImg}/>
    </div>
  );
}

export default App;
