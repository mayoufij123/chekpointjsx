import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import AboutUs from './component/AboutUs';
import Projet from './component/Projet';
import Contact from './component/Contact';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <AboutUs/>
    <Projet/>
    <Contact/>
    <Footer/>
    
    </div>
  );
}

export default App;
