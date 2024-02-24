import './styles/App.css';
import mainImg from './images/main-img.jpg';
import iconImg from './images/barber-shop.svg';
import Header from "./components/header/Header";
import ContentFirst from "./components/content/ContentFirst";
import ContentSecond from "./components/content/ContentSecond";

function App() {
  return (
    <div className="app">
        <Header img={iconImg}/>
        <ContentFirst mainImg={mainImg}/>
        <ContentSecond/>
    </div>
  );
}

export default App;
