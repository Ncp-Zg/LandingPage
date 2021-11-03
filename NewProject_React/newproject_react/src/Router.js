import React from 'react'
import {BrowserRouter , Route , Switch} from "react-router-dom"
import App from './App'
import AxiosTutorial from './Components/AxiosTutorial'
import BasketPage from './Components/BasketPage'
import Product from './Components/Product'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={()=><App />}/>
                    <Route path="/products/:id" component={()=><Product />}/>
                    <Route path="/axios" component={()=><AxiosTutorial />}/>
                    <Route path="/basketPage" component={()=><BasketPage />}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default Router
