import React, { Component } from "react"
import Stock from "./Stock"

class StockContainer extends Component {
  constructor(props) {
    super(props)

    console.log(props.match.params.stockId)
  }

  render() {
    return (
      <Stock />
    )
  }
}

export default StockContainer