import React from 'react'

export default function Button({text, css, ...props}) {
  return (
    <button 
        onClick={onClickHandler}
        className={` ${css} ${isActive ? "" : ""}`}>
        {text}
    </button>
  )
}
