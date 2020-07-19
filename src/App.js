import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Pruebas from './components/Pruebas';
import './App.css';
/* import {Bar} from 'react-chartjs-2'; */

function App() {

  
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact 
          path ="/" 
          component={Home}
        />

        <Route
          exact 
          path ="/estudio" 
          component={Home}
        />

        <Route
          exact 
          path ="/pruebas" 
          component={Pruebas}
        />

        <Route
          exact 
          path ="/resultados" 
          component={Home}
        />        


        
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
