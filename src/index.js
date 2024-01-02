import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './about';
import Home from './home';
import Navbar, {Footer} from './navbar';
import Services from './services';
import './index.css';

const Num=()=>{
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<Num />);
