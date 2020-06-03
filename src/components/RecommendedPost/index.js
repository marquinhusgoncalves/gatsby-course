import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"

import getThemeColor from "../../utils/getThemeColor"

const RecommendedPost = ({ previous, next }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to={previous.fields.slug}
        className="previous"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPost.propTypes = {
  previous: propTypes.shape({
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
  }),
  next: propTypes.shape({
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPost
