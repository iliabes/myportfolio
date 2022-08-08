import React  from 'react';
import Home from './pages/home/home';
import Start from './pages/start/start';
import {Routes,Route,} from "react-router-dom";
import './style/index.sass'
import Footer from './global/Footer/Footer';
import Header from './global/Header/Header';
import { useAppSelector } from "./hooks/store"
import ThemeProvider from './provider/themeProvider';


function App() {
  let todos:any = useAppSelector(state => state.todoSlice.todos)
  let days:any = useAppSelector(state => state.sliceWeather.dayly)
  let current_wetaher:any = useAppSelector(state => state.sliceWeather.current)



  return (
    <div className='App' >
 
    <Header/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/start" element={<Start/>}/>
     
    </Routes>
    {/* <Footer/> */}
 
    </div>
  );
}

export default App;


