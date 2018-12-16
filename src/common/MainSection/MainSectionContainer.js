import React, { Component } from "react"

import MainSection from "./MainSection"

class MainSectionCaontainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { theme, type, logo } = this.props

    return (
      <MainSection
        theme={theme}
        type={type}
        logo={logo}
      />
    )
  }
}

export default MainSectionCaontainer