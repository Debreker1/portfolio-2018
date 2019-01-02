import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import MyWork from './pages/MyWork';


class Client extends React.Component
{
    public render()
    {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Homepage} />
                    <Route exact={true} path="/mijnwerk" component={MyWork}/>
                    <Route exact={true} path="/contact" component={Contact}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Client