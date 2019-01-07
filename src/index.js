import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import Home from "./components/Home"
import Stock from "./components/Stock"
import Navbar, { createRoutes } from "./common/Navbar/NavbarContainer"

import "./index.css"
import "semantic-ui-css/semantic.min.css"

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'Stock', path: '/stocks/:stockId', component: Stock },
]

const Index = () => (
  <Router basename="/">
    <div>
      <Navbar
        routes={routes}
      />
      <div className="main-container">
        {createRoutes(routes)}
      </div>
    </div>
  </Router>
)

render(
  <Index />,
  document.getElementById("root"),
)