import React from 'react'
import style from "./input.module.css"
function Type2() {
  return (
    <div className={style.type1} >
      Welcome to the form
      <form action="">
        <input type="text" placeholder="Description"/>
        <input type="text" placeholder="Categories"/>
        <input type="text" placeholder="Items"/>
        <input type="text" placeholder="Belongs to"/>
      </form>
    </div>
  )
}

export default Type2