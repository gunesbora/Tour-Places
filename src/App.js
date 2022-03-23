
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
// import data from "../src/helper/data"

// import Card from './components/cards/Card';
import Cardnew from './components/cards/Card';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Navbar />
      <Header/>
    
  
       <Cardnew/>
    </Router>
  );
}

export default App;
