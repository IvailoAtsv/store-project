import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Products from './components/Products';
import { useState } from 'react';
import Sidebar from './components/Sidebar'
import { GlobalStyle } from './globalStyles';
import bagData from './data/bags';
import shoesData from './data/shoes';
import dressesData from './data/dresses';
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen)
  }
  return (

    <Router>

      <GlobalStyle />
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Route exact path="/shoes">

        <Products toggleFilters={toggleFilters} data={shoesData} category={'shoes'} />

      </Route>
      <Route exact path="/dresses">

        <Products toggleFilters={toggleFilters} data={dressesData} category={'dresses'} />

      </Route>
      <Route exact path="/">

        <Products toggleFilters={toggleFilters} data={bagData} category={'bags'} />

      </Route>
      <Footer />
    </Router>

  );
}

export default App;
