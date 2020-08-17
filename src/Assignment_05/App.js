import React from 'react'
import AllProductsPage from './components/AllProductsPage'
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'
import About from './components/About';

const Links = () => {
        return(
            <nav>
                <NavLink exact activeClassName="current" to="/">About</NavLink>
                <NavLink activeClassName="current" to="/products">Products</NavLink>
            </nav>
        );
    
}
const App = () => {
        return(
            <Router>
                <div> 
                    <Links/>
                    <Switch>
                        <Route exact path="/">
                            <About/>
                        </Route>
                        <Route path="/products">
                            <AllProductsPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    
}

export default App;

