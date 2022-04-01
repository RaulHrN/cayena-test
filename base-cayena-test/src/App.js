import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderSupplier from './components/HeaderSupplier/HeaderSupplier';
import ListSuppliers from './components/pages/ListSuppliers/ListSuppliers';
import Login from './components/pages/Login/Login';
import SupplierDetail from './components/pages/SupplierDetail/SupplierDetail';

function App() {
  return (
    <Router>
      <HeaderSupplier/>
    <Switch>
      <Route exact path='/'>
      <Login />
    </Route>
    <Route path='/list_suppliers'>
     <ListSuppliers/>
    </Route>
    <Route path='/supplier_detail'>
      <SupplierDetail />
    </Route>
  </Switch>
  </Router>
  )
}

export default App;
