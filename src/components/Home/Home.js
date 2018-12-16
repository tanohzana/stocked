import React from "react"

import MainSection from "../../common/MainSection/MainSectionContainer"

import diagram from "../../assets/diagram.png"

const Home = (props) => {

  return (
    <div>
      <MainSection
        logo={diagram}
        theme="light-theme"
        type="search"
      />
    </div>
  )
}

export default Home