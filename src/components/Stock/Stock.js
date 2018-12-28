import React from "react"
import propTypes from "prop-types"

const Stock = (props) => {
  const { stockInfo } = props

  return (
    <div>
      {JSON.stringify(stockInfo)}
    </div>
  )
}

Stock.propTypes = {
  stockInfo: propTypes.any.isRequired,
}

export default Stock