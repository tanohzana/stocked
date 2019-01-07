import React from "react"
import propTypes from "prop-types"
import { Button, Card, Grid, Image, Label } from "semantic-ui-react"
import { VictoryChart, VictoryLine } from "victory"

import "./Stock.css"

const Stock = (props) => {
  const { stockInfo, stockLogo, victoryTheme, lineData, stockPrice, news } = props

  return (
    <div>
      <Card fluid raised>
        <Card.Content>
          <Image floated="right" size="mini" src={stockLogo} />
          <Card.Header>
            <h1>
            {stockInfo.info.companyName} ({stockInfo.info.symbol})
            {stockInfo.quote.calculationPrice === "tops" ?
              <Label color="green">
                OPEN
              </Label>
            : <Label color="red">
              CLOSED
            </Label>}
            </h1>
          </Card.Header>
          <Card.Meta>
            {stockInfo.info.tags.map(tag => (
              <Label basic key={tag}>
                {tag}
              </Label>
            ))}
          </Card.Meta>
          <Card.Description>
            {stockInfo.info.description}
          </Card.Description>
        </Card.Content>
      </Card>

      <Card.Group itemsPerRow={2}>
        <Card raised>
          <Card.Content>
            <Grid>
              <Grid.Row className="text-center" columns={2}>
                <Grid.Column>
                  <h2>
                    <span>Latest close:</span> {stockInfo.quote.close}
                  </h2>
                </Grid.Column>
                <Grid.Column>
                  <h2>
                    <span>Price:</span> {stockPrice}
                  </h2>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="text-center" columns={2}>
                <Grid.Column>
                  <h3>
                    <span>Latest open:</span> {stockInfo.quote.open}
                  </h3>
                </Grid.Column>
                <Grid.Column>
                  <h3>
                    <span>Average volume:</span> {stockInfo.quote.avgTotalVolume}
                  </h3>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="text-center" columns={2}>
                <Grid.Column>
                  <h3>
                    <span>Low:</span> {stockInfo.quote.low}
                  </h3>
                </Grid.Column>
                <Grid.Column>
                  <h3>
                    <span>High:</span> {stockInfo.quote.high}
                  </h3>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <h3>News</h3>
                  <div>
                    {news.map(pieceOfNews => (
                      <div>{pieceOfNews.headline}</div>
                    ))}
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
        <Card raised>
          <VictoryChart>
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={lineData}
              animate
            />
          </VictoryChart>
        </Card>
      </Card.Group>
    </div>
  )
}

Stock.propTypes = {
  stockInfo: propTypes.any.isRequired,
}

export default Stock

// Stock basic info

// avgTotalVolume: 29681390
// calculationPrice: "close"
// change: 6.21
// changePercent: 0.04714
// close: 137.95
// closeTime: 1546635600163
// companyName: "Facebook Inc."
// delayedPrice: 137.92
// delayedPriceTime: 1546635600224
// extendedChange: 0.05
// extendedChangePercent: 0.00036
// extendedPrice: 138
// extendedPriceTime: 1546639157667
// high: 138
// iexAskPrice: null
// iexAskSize: null
// iexBidPrice: null
// iexBidSize: null
// iexLastUpdated: null
// iexMarketPercent: null
// iexRealtimePrice: null
// iexRealtimeSize: null
// iexVolume: null
// latestPrice: 137.95
// latestSource: "Close"
// latestTime: "January 4, 2019"
// latestUpdate: 1546635600163
// latestVolume: 28250498
// low: 133.75
// marketCap: 396439001075
// open: 133.95
// openTime: 1546612200839
// peRatio: 18.67
// previousClose: 131.74
// primaryExchange: "Nasdaq Global Select"
// sector: "Technology"
// symbol: "FB"
// week52High: 218.62
// week52Low: 123.02
// ytdChange: 0.06387054245283005