import './App.css';
import { Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './components/home';
import { AddEmployee } from './components/add-employee';


function App() {
  return (
    <GlobalProvider>
      <div class="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/add" component={AddEmployee}/>
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
