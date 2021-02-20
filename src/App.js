import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screen/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <div>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>
}

export default App;
