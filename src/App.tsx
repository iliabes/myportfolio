import Home from './pages/home/home';
import {Routes,Route,} from "react-router-dom";
import './style/index.sass'



function App() {

  return (
    <div className='App' >
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  )
  
}

export default App;


