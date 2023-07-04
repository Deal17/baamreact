import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/navbar';
import ListCart from './components/ListCart/ItemListContainer';
import CartWidget from './components/paginas/CartWidget/CartWidget';
function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
        </Router>
        <Router>
          <ListCart/>
        </Router>
    </div>
  );
}

export default App;
