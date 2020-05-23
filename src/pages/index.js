import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <ul>
      <li>
          <Link
            to="/"
            activeStyle={{ color: "red" }}
          >
          Home
          </Link>
      </li>
      <li>
          <a href="/about">About</a>
      </li>
      <li>
          <Link to="/about">About (Gatsby)</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
