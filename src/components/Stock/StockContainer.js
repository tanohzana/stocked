import React, { Component } from "react"
import Stock from "./Stock"
import stockService from "../../services/stocks"

class StockContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stockInfo: null,
      generalInfo: {},
      stockLogo: null,
      stockOpen: false,
      linData: [],
      stockPrice: 0,
    }

    this.getStockPrice = this.getStockPrice.bind(this)
    this.getStockGraph = this.getStockGraph.bind(this)
  }

  async componentDidMount() {
    const { stockId } = this.props.match.params

    const stockLogo = await stockService.getLogo(stockId)
    await this.getStockPrice(stockId)
    await this.getStockGraph(stockId)

    this.setState({ stockLogo })

    this.priceTimer = setInterval(() => this.getStockPrice(stockId), 1500)
    this.graphTimer = setInterval(() => this.getStockGraph(stockId), 15000)
  }

  async getStockPrice(stockId) {
    const stockPrice = await stockService.getPrice(stockId)

    this.setState({ stockPrice })
  }

  async getStockGraph(stockId) {
    const stockInfo = await stockService.getOne({ stockId, historyRange: "1d" })

    const lineData = stockInfo.tradingData.map((data, index) => ({
      x: index,
      y: data.average,
    }))

    this.setState({ stockInfo, lineData })
  }

  componentWillUnmount() {
    this.priceTimer = null
    this.graphTimer = null
  }

  render() {
    const {
      stockInfo,
      stockLogo,
      generalInfo,
      stockOpen,
      lineData,
      stockPrice,
    } = this.state

    return (stockInfo && stockLogo) ?
      <Stock
        stockInfo={stockInfo}
        stockLogo={stockLogo}
        generalInfo={generalInfo}
        lineData={lineData}
        stockPrice={stockPrice}
      /> : <div>loading</div>
  }
}

export default StockContainer