import React from "react"
import PropTypes from "prop-types"
import Profile from "./profile"

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Profile />
      </aside>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
