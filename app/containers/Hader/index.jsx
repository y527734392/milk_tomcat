/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link } from 'react-router-dom'

import util from '../../utils/help'
let _ = new util();

class Header extends React.Component {
    render() {
        return (
            <div className="header clearfix">
                <h3 className="title">视界牧业后台管理中心</h3>
                <div className="user_info clearfix">
                    <span className="login"><Link to="/login">登录</Link></span>
                    <span className="register"><Link to="/register">注册</Link></span>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(334555);
    }
}
export default Header
