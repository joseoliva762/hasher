import * as React from "react"

interface HamburgerIconParams {
    height: number,
    width: number
}

const HamburgerIcon = ({ height, width }: HamburgerIconParams) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    height={height}
    width={width}
  >
    <path fill="#0070f3" d="M0 7.5v5h50v-5Zm0 15v5h50v-5Zm0 15v5h50v-5Z" />
  </svg>
)

export default HamburgerIcon