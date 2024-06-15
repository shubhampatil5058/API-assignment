import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './components/Home/Home';
import Pokeapi from './components/Tasks/Pokeapi';
import Product from './components/Tasks/Product';
import productCart from './components/Tasks/productCart';


const theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Pokeapi" component={Pokeapi} />
          <Route path="/Product" component={Product}/>
          <Route path="/productCart" component={productCart}/>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
