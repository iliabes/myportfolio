import React  from 'react';
import Home from './pages/home/home';
import {Routes,Route,} from "react-router-dom";
import './style/index.sass'
import Footer from './global/Footer/Footer';
import Header from './global/Header/Header';
import { useAppSelector } from "./hooks/store"
import ThemeProvider from './provider/themeProvider';


function App() {
  return (
    <div className='App' >
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;


