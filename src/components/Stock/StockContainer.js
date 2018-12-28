import React, { Component } from "react"
import Stock from "./Stock"
import stockService from "../../services/stocks"

class StockContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stockInfo: {},
    }
  }

  async componentDidMount() {
    const { stockId } = this.props.match.params

    const stockInfo = await stockService.getOne(stockId)

    this.setState({ stockInfo })
  }

  render() {
    const { stockInfo } = this.state

    return (
      <Stock
        stockInfo={stockInfo}
      />
    )
  }
}

export default StockContainer