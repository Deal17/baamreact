import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navegacion/navbar';
import Home from './components/paginas/inicio';
import Galery from './components/paginas/galeria';

import Contacto from './components/paginas/contacto';
import Camiseta from './components/paginas/producto/camiseta';
import Detallecamiseta from './components/paginas/producto/detallecamiseta';
import Gorra from './components/paginas/producto/gorras';
import Error from './components/paginas/error';

function App() {

  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Category/1' element={<Galery/>}></Route>
        <Route path='/Category/2' element={<Contacto/>}></Route>
        <Route path='/Category/3' element={<Camiseta/>}></Route>
        <Route path='/Category/4' element={<Gorra/>}></Route>
        <Route path="/item/:id" element={<Detallecamiseta />} />
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
