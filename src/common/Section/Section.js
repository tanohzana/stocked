import React from "react"
import propTypes from "prop-types"

import style from "./Section.css"

const Section = (props) => {
  const { backgroundColor } = props

  const backgroundStyle = style[`background-${backgroundColor}`]
  const secondarySectinoStyle = style["secondary-section"]
  return (
    <section className={`${secondarySectinoStyle} ${backgroundStyle}`}>

    </section>
  )
}

Section.propTypes = {
  backgroundColor: propTypes.string.isRequired,
}

export default Section