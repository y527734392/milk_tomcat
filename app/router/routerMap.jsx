
import React from 'react'
import {BrowserRouter as Router,Route,Link,HashRouter,BrowserRouter,Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import App from '../containers/App'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'

//admin
import Banner from '../containers/Admin/Banner'
import Recommend from '../containers/Admin/Recommend'
import Product from '../containers/Admin/Product'
import ProductSet from '../containers/Admin/Product/Set'
import Orderuser from '../containers/Admin/Orderuser'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <App>
                        <Switch>
                            <Route history={history} exact path="/" component={Home} />
                            <Route exact strict path="/admin/banner" component={Banner} />
                            <Route path="/admin/recommend" component={Recommend} />
                            <Route path="/admin/product" component={Product} />
                            <Route path="/admin/orderuser" component={Orderuser} />
                            <Route path="/admin/productedit/:set" component={ProductSet} />
                        </Switch>
                    </App>
                    <div>
                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
                </div>

            </BrowserRouter>
        )
    }
}

export default RouteMap