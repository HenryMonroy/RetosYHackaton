import './App.css';
import { Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './components/home';
import { ProductDetail } from './components/product-detail';


function App() {
  return (
    <GlobalProvider>
      <div class="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/detail" component={ProductDetail}/>
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
