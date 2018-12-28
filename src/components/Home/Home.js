import React from "react"
import propTypes from "prop-types"

import MainSection from "../../common/MainSection/MainSectionContainer"
import Section from "../../common/Section/Section"

import diagram from "../../assets/diagram.png"

const Home = (props) => {

  const placeholderValues = [
    "test",
    "village",
  ]

  return (
    <div>
      <MainSection
        logo={diagram}
        theme="light-theme"
        type="search"
        placeholderValues={placeholderValues}
      />

      <Section
        backgroundColor="blue"
      />

      <Section
        backgroundColor="white"
      />

      <Section
        backgroundColor="green"
      />
    </div>
  )
}

Home.propTypes = {}

export default Home