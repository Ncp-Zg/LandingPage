
import { Route, Switch } from 'react-router-dom';
import Admin from './Admin';
import './App.css';

function App() {
  return (
    <div className="App text-center" >
        <Switch>
          <Route exact path ="/" component={()=><p style={{fontSize:"100px"}}>Welcome to firebase Tutorial</p>} />
          <Route path="/admin" component={()=><Admin/>}></Route>

        </Switch>
    </div>
  );
}

export default App;
