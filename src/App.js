import React from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaList from './components/Pizzalist';
import AddPizzaForm from './components/AddPizzaForm';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <PizzaList />
        <AddPizzaForm />
      </header>
    </div>
  );
}

export default App;
