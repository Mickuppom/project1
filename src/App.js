import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screen/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screen/auth/login';

function App() {
  return <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </div>
}

export default App;
