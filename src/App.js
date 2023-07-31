import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Products from './components/Products';
import { useState } from 'react';
import Sidebar from './components/Sidebar'
import { GlobalStyle } from './globalStyles';
import bagData from './data/bags';
import Filters from './components/Filters';
import shoesData from './data/shoes';
import dressesData from './data/dresses';

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
        <Filters isFilterOpen={isFilterOpen} toggleFilters={toggleFilters} />

        <Products toggleFilters={toggleFilters} data={shoesData} category={'shoes'} />

      </Route>
      <Route exact path="/dresses">
        <Filters isFilterOpen={isFilterOpen} toggleFilters={toggleFilters} />

        <Products toggleFilters={toggleFilters} data={dressesData} category={'dresses'} />

      </Route>
      <Route exact path="/">
        <Filters isFilterOpen={isFilterOpen} toggleFilters={toggleFilters} />

        <Products toggleFilters={toggleFilters} data={bagData} category={'bags'} />

      </Route>
    </Router>

  );
}

export default App;
