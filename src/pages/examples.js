import React from 'react'
import Header from "./examples/Header"
import HeaderStatic from "./examples/HeaderStatic"
import Layout from "./components/Layout"
import {graphql} from "gatsby"
const Examples = ({data}) => {
    const {site:{info:{author},},} = data
    return (
        <Layout >
            <h1>Bonjour depuis la page d'exemple</h1>
            <Header />
            <HeaderStatic />
            <h5>author: {author} </h5>
        </Layout>
    )
}
export const data = graphql`
query {
    site {
        info:siteMetadata {
          title
          description
          author
          data
          person {
            age
            name
          }
        }
      }
  }
  
`
export default Examples
