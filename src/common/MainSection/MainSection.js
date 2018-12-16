import React from "react"

import SearchMainSection from "./SearchMainSection"
import DefaultMainSection from "./DefaultMainSection"

import style from "./MainSection.css"

const getSectionType = (type, logo) => {
  switch(type) {
    case 'search':
      return <SearchMainSection logo={logo} />
      break
    default:
      return <DefaultMainSection />
  }
}

const MainSection = (props) => {
  const { theme, type, logo } = props

  return (
    <section className={style[theme]}>
      {getSectionType(type, logo)}
    </section>
  )
}

export default MainSection