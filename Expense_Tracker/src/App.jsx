import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Transaction from './components/Transaction';
import { DataProvider } from './DataProviderContex';

const App = () => {

  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
