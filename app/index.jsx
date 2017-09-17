/**
 * Created by muyi on 2017/9/15.
 */


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';

import RouteMap from './router/routerMap'

//common-css
import 'lessDir/main.less';




// 渲染组件到页面
render(
    <RouteMap history={hashHistory} />,
    document.getElementById('root')
);