import logo from './logo.svg';
import './App.css';
import Read from './Componants/Read'
import Teachers from './Componants/Teachers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Componants/Nav';
import Addstudents from './Componants/Addstudents';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Nav/>
       <Routes>
       <Route path='/' element={<Read/>}/>
     <Route path='/add' element={<Addstudents/>}/>
    
        </Routes>
    
        </BrowserRouter>
    </div>
  );
}

export default App;
