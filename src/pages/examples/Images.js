import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import img from 'D:/Jell/GatsbyCourse/projectOne/src/images/img-4.jpg'
import Image from 'gatsby-image'

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "img-2.jpg"}) {
      childImageSharp {
        fixed (width: 300, height: 400){
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "img-3.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  
`

const Img = () => {

    const data = useStaticQuery(getImages);
  console.log(data)
    return (
        
        <section className="images">

            <article className="single-image">
            <h3>Basic image</h3>
            <img src={img} width="100%" alt=""/>
            </article>

            <article className="single-image">
            <h3>Basic image/blur</h3>
            <Image fixed={data.fixed.childImageSharp.fixed} />
            </article>
            
            <article className="single-image">
            <h3>fixed image/svg</h3>
            <Image fluid={data.fluid.childImageSharp.fluid}  />
            </article>
            
        </section>
        
    )
}

export default Img
