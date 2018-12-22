import React, { Component } from "react"

import MainSection from "./MainSection"

class MainSectionCaontainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholderValue: "",
    }

    this.onSearchChangeHandle = this.onSearchChangeHandle.bind(this)
  }

  onSearchChangeHandle(event) {
    const { value } = event.target

    this.setState({
      placeholderValue: value,
    })
  }

  // @TODO: this should redirect to the search field
  // value as stock symbol
  onSearchSubmit(event) {
    event.preventDefault()
    console.log("test")
    window.location = "/test"
  }

  render() {
    const { theme, type, logo, placeholderValues } = this.props
    const { placeholderValue } = this.state

    return (
      <MainSection
        theme={theme}
        type={type}
        logo={logo}
        placeholderValue={placeholderValue}
        onChangeHandle={this.onSearchChangeHandle}
        onSearchSubmit={this.onSearchSubmit}
      />
    )
  }
}

export default MainSectionCaontainer