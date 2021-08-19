import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Login from './Auth/Login';
import Dashboard from './Dashboard';



const Admin = () => {


    const {path} = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route exact path={path} component={()=><h1>Admin Route</h1>}/>
                <Route path={`${path}/login`} component={()=><Login/>}/>
                <Route path={`${path}/dashboard`} component={()=><Dashboard/>}/>
            </Switch>
        </div>
    )
}

export default Admin
