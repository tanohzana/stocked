import React from "react"
import TextField from '@material-ui/core/TextField';

import style from "./MainSection.css"

const SearchMainSection = (props) => {
  const { logo } = props

  return (
    <div>
      <div className={style.logoContainer}>
        <img src={logo} />
      </div>
      <div className={style.searchFieldContainer}>
        <TextField
          id="outlined-error"
          label="Search"
          className={style.searchField}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </div>
    </div>
  )
}

export default SearchMainSection