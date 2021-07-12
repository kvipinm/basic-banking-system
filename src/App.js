import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx'
import Home from './components/Home'
import Accounts from "./components/Accounts";
import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/accounts' component={Accounts} />
                <Route path='/transactions' component={Transactions} />
                <Route path='/transfer' component={Transfer} />
                <Route path='/about' component={About} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    )
}
export default App;
