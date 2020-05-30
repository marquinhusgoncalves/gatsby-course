import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  nummPages,
  prevPages,
  nextPages,
}) => {
  return (
    <S.PaginationWrapper>
      {!isFirst && <Link to={prevPages}>←</Link>}
      <p>
        {currentPage} de {nummPages}
      </p>
      {!isLast && <Link to={nextPages}>→</Link>}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  nummPages: propTypes.number.isRequired,
  prevPages: propTypes.string,
  nextPages: propTypes.string,
}

export default Pagination
