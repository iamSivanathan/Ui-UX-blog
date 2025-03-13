import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Box from './pages/Box'
import About from './pages/About'
import Companies from './pages/Companies'
import Schedule from './pages/Schedule';
import Offer from './pages/Offer';
import Tools from './pages/Tools';
import Reviews from './pages/Reviews';
import Footer from './pages/Footer';
import Apply from './component/Apply';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply' element={<Apply/>}/>
      </Routes>
      <Box/>
      <About/>
      <Companies/>
      <Schedule/>
      <Offer/>
      <Tools/>
      <Reviews/>
      <Footer/>
      
    </BrowserRouter>

  );
}

export default App;
