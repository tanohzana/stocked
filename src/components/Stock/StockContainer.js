import React, { Component } from "react"
import Stock from "./Stock"
import stockService from "../../services/stocks"

class StockContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stockInfo: null,
      generalInfo: {},
      priceVisibility: false,
      stockLogo: null,
      linData: [],
      stockPrice: 0,
      news: [],
      trendColor: null,
    }

    this.getStockPrice = this.getStockPrice.bind(this)
    this.getStockGraph = this.getStockGraph.bind(this)
    this.setTrendColor = this.setTrendColor.bind(this)
  }

  async componentDidMount() {
    const { stockId } = this.props.match.params

    const result = await Promise.all([
      stockService.getLogo(stockId),
      stockService.getNews(stockId),
      this.getStockPrice(stockId),
      this.getStockGraph(stockId),
    ])

    const stockLogo = result[0]
    const news = result[1]

    this.setState({ stockLogo, news })
  }

  setTrendColor() {
    const { stockInfo, stockPrice } = this.state

    if (stockInfo && stockPrice >= stockInfo.open) {
      this.setState({ trendColor: "#4CAF50" })
    } else if (stockInfo && stockPrice < stockInfo.open) {
      this.setState({ trendColor: "#c43a31" })
    } else {
      this.setState({ trendColor: "#9E9E9E" })
    }
  }

  async getStockPrice(stockId) {
    const { priceVisibility, stockPrice } = this.state
    const newStockPrice = await stockService.getPrice(stockId)
    
    if (stockPrice !== newStockPrice) {
      this.setState({ stockPrice: newStockPrice, priceVisibility: !priceVisibility })
    }

    this.setTrendColor()
  }

  async getStockGraph(stockId) {
    const stockInfo = await stockService.getOne({ stockId, historyRange: "1d" })

    const lineData = stockInfo.tradingData
      .filter(data => data.average > 0)
      .map((data, index) => ({
        x: index,
        y: data.average,
      }));

    if (stockInfo.quote.calculationPrice === "tops") {
      this.priceTimer = setInterval(() => this.getStockPrice(stockId), 1500)
      this.graphTimer = setInterval(() => this.getStockGraph(stockId), 15000)
    }

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
      priceVisibility,
      trendColor,
      lineData,
      stockPrice,
      news,
    } = this.state

    return (stockInfo && stockLogo) ?
      <Stock
        stockInfo={stockInfo}
        trendColor={trendColor}
        priceVisibility={priceVisibility}
        stockLogo={stockLogo}
        generalInfo={generalInfo}
        lineData={lineData}
        news={news}
        stockPrice={stockPrice}
      /> : <div>loading</div>
  }
}

export default StockContainer