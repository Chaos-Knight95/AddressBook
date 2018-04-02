import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { HomeComponent } from './Home';
export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Address Book</h1>
                    <ul>
                        <li><Link to={'/Home'}>Home</Link></li>
                        <li><Link to={'/Home/form'}>+Add</Link></li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route path='/Home' component={HomeComponent} />
                        <Redirect to={'/home'} path='/' />
                    </Switch>
                </div>
            </Router>
        );
    }
}