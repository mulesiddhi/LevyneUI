import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      data-name="Iconly/Bold/Search"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill = "#fff"
        data-name="Search"
        d="M19.741 21.608l-2.12-2.43a1.083 1.083 0 010-1.524.986.986 0 011.393 0l2.554 2.062h.045a1.348 1.348 0 010 1.892 1.315 1.315 0 01-1.872 0zM2 10.67A8.624 8.624 0 0110.578 2a8.531 8.531 0 016.065 2.54 8.716 8.716 0 012.512 6.13 8.624 8.624 0 01-8.577 8.67A8.624 8.624 0 012 10.67z"
      />
    </svg>
  )
}

export default SvgComponent
