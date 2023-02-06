
import './App.css';
import Cakes from './Components/Cakes';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from './Components/Contact';
import AdminCakes from './Components/AdminCakes';
import About from './Components/About';
import Landing from './Components/Landing';

function App() {
  return (
    <Router>
    <>
       <Header/>
        <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/cakes' element={<Cakes/>} />  
        <Route path='/contact' element={<Contact/>} />  
        <Route path='/about' element={<About/>} />  
        <Route path='/admin' element={<AdminCakes/>} />
    
        

     
        </Routes>
    
    
    
    </>
    </Router>
  );
}

export default App;
