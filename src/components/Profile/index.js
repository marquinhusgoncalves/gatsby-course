import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query Oi {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <>
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </>
  )
}

export default Profile
