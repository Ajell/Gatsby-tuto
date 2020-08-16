import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
{
    site {
      info: siteMetadata {
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

const Header = () => {
    const data = useStaticQuery(getData)
  return ( 
  <div>
  <h3>{data.site.info.title}</h3>
  <h3>{data.site.info.description}</h3>
  <h3>{data.site.info.person.name}</h3>
  <h3>{data.site.info.person.age}</h3>
   </div>
   );
}

export default Header
