import React from "react"
import "./Navbar.css"

const Navbar = (props) => {
  const { buildRoutesToShow, routes } = props

  return (
    <nav>
      <ul>
        {buildRoutesToShow(routes)}
      </ul>
    </nav>
  )
}

export default Navbar