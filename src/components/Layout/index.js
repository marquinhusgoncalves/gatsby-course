import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import GlobalStyles from "../../styles/global"
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapped>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapped>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
