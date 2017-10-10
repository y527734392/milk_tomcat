
import React from 'react'
import {BrowserRouter as Router,Route,Link,HashRouter,BrowserRouter,Switch,Provider,Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

//import App from '../containers/App'
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
        const routes = [
            { path: "/", component:'Banner' },
            { path: "/admin/banner", component: 'Banner' },
            { path: "/admin/recommend", component: 'Recommend' },
            { path: "/admin/product", component: 'Product' },
            { path: "/admin/orderuser", component: 'Orderuser' },
            { path: "/admin/productedit/:set", component: 'ProductSet' },
            /*{ path: '/', component: HomeContainer },
            { path: 'login', component: LoginContainer },
            { path: 'map', component: MapContainer },
            { path: 'about', component: AboutContainer },
            { path: 'type/:type', component: TypeContainer },*/
        ];
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact strict path="/login" component={Login} />
                        <Route exact strict path="/register" component={Register} />
                        <Route exact strict path="/404" component={NotFound} />
                        <Home>
                            <Switch>
                                <Route exact strict path="/" component={Banner} />
                                <Route exact strict path="/admin/banner" component={Banner} />
                                <Route exact strict path="/admin/recommend" component={Recommend} />
                                <Route exact strict path="/admin/product" component={Product} />
                                <Route exact strict path="/admin/orderuser" component={Orderuser} />
                                <Route exact strict path="/admin/productedit/:set" component={ProductSet} />

                                <Route path="*" render={(props) => (
                                    <Redirect to="/404" />
                                )}/>

                            </Switch>
                        </Home>

                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default RouteMap