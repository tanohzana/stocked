import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch } from "react-router-dom"

import Home from "./components/Home"
import Stock from "./components/Stock"
import StocksDashboard from "./components/StocksDashboard"
import Navbar, { createRoutes } from "./common/Navbar/NavbarContainer"

import "./index.css"
import "semantic-ui-css/semantic.min.css"

const routes = [
  { name: 'Home', path: '/', component: Home, navbar: true },
  { name: 'Stock', path: '/stocks/:stockId', component: Stock, navbar: false },
  { name: 'Stocks', path: '/stocks', component: StocksDashboard, navbar: true },
]

const Index = () : HTMLDocument => (
  <Router basename="/">
    <div>
      <Navbar
        routes={routes}
      />
      <div className="main-container">
        <Switch>
          {createRoutes(routes)}
        </Switch>
      </div>
    </div>
  </Router>
)

render(
  <Index />,
  document.getElementById("root"),
)