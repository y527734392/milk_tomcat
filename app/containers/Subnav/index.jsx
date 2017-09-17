/**
 * Created by muyi on 2017/9/17.
 */

import React from 'react'
import { Link } from 'react-router-dom'

class Subnav extends React.Component {
    render() {
        return (
            <div className="subnav">
                <ul className="item">
                    <li><Link to="/admin/banner">Banner</Link></li>
                    <li><Link to="/admin/recommend" >推荐</Link></li>
                    <li><Link to="/admin/product">产品</Link></li>
                    <li><Link to="/admin/orderuser">订奶用户</Link></li>
                </ul>
            </div>
        )
    }
}
export default Subnav