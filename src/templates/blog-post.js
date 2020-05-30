import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlogPost = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query Post($slug: String) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
        }
      }
    }
  `)

  return (
    <>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
    </>
  )
}

export default BlogPost
