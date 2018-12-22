import React from "react"

import SearchMainSection from "./SearchMainSection"
import DefaultMainSection from "./DefaultMainSection"

import style from "./MainSection.css"

const getSectionType = (type, logo, placeholderValue, onChangeHandle, onSearchSubmit) => {
  switch(type) {
    case 'search':
      return <SearchMainSection
          logo={logo}
          placeholderValue={placeholderValue}
          onChangeHandle={onChangeHandle}
          onSearchSubmit={onSearchSubmit}
        />
    default:
      return <DefaultMainSection />
  }
}

const MainSection = (props) => {
  const {
    theme,
    type,
    logo,
    placeholderValue,
    onChangeHandle,
    onSearchSubmit,
  } = props

  const themeStyle = style[theme]
  const mainSectionStyle = style["main-section"]

  return (
    <section className={`${themeStyle} ${mainSectionStyle}`}>
      {getSectionType(type, logo, placeholderValue, onChangeHandle, onSearchSubmit)}
    </section>
  )
}

export default MainSection