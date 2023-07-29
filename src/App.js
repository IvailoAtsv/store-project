import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Products from './components/Products';
import { useState } from 'react';
import Sidebar from './components/Sidebar'
function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <Router>
      <Header toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Route path="/">

        <Products />


      </Route>
    </Router>

  );
}

export default App;
