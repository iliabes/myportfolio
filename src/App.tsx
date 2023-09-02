import Home from './pages/home/home';
import {Routes,Route,} from "react-router-dom";
import './style/index.sass'

let bla = {
  bla1:1,
  bla2:2
}

function App() {
  console.log(bla)
  return (
    <div className='App' >
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;


