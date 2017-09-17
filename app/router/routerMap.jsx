
import React from 'react'
import {BrowserRouter as Router,Route,Link,HashRouter,Switch} from 'react-router-dom'

import App from '../containers/App'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'

//admin
import Banner from '../containers/Admin/Banner'
import Recommend from '../containers/Admin/Recommend'
import Product from '../containers/Admin/Product'
import Orderuser from '../containers/Admin/Orderuser'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <HashRouter>
                <div>
                    <App>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </App>
                    <Home>
                        <Route exact path="/" component={Banner} />
                        <Route path="/admin/banner" component={Banner} />
                        <Route path="/admin/recommend" component={Recommend} />
                        <Route path="/admin/product" component={Product} />
                        <Route path="/admin/orderuser" component={Orderuser} />
                    </Home>
                </div>
            </HashRouter>
        )
    }
}

export default RouteMap