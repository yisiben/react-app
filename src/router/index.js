/**
 * 路由配置页面
 *
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../containers'

const RouteMap = () => (
    <Router>
        <Route exact path="/" component={Home} />
    </Router>
)

export default RouteMap
