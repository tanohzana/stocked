import React from "react"

const Stock = (props) => {
  const { stockInfo } = props

  return (
    <div>
      {JSON.stringify(stockInfo)}
    </div>
  )
}

export default Stock