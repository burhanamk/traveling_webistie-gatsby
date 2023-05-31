import React from "react";
import Layout from "../../components/layout";
import "../../styles/project-module.css"
import { Link, graphql } from "gatsby";
import Img from "gatsby-image"

export default function Places({ data }) {
  // console.log("data", data)

  const placeData = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className="Places">
        <div className="placesvisited">
          <h1>Here are the places that we have visited</h1>
        </div>
        <div className="staticData">
          {placeData.map(ele => (
            <Link to={"/projects/" + ele.frontmatter.slug} key={ele.id}>

              <div className="innerData">
              <Img fluid={ele.frontmatter.thumb.childImageSharp.fluid} className="thumb_image"/>
                <h2>{ele.frontmatter.title}</h2>
                <h4> {ele.frontmatter.stack} </h4>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </Layout>
  )
}



export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`

