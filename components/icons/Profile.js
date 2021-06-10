import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      data-name="Iconly/Bold/Profile"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill = "#fff"
        data-name="Profile"
        d="M4 18.575c0-2.722 3.686-3.4 8-3.4 4.339 0 8 .7 8 3.424S16.315 22 12 22c-4.338 0-8-.7-8-3.425zM6.706 7.291A5.294 5.294 0 1112 12.583a5.274 5.274 0 01-5.294-5.292z"
      />
    </svg>
  )
}

export default SvgComponent
