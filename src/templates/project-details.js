import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image"
import { graphql } from "gatsby";
import "../styles/project-detail.css"


export default function ProjectDetails({ data }) {

    const { html } = data.markdownRemark
    const { stack, title, featuredImg } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className="details">
                <h2>{title}</h2>
                <h4>{stack}</h4>

                <div className="project_image">
                    <Img fluid={featuredImg.childImageSharp.fluid} className="main_image"/>
                </div>

                <div className="htmlData" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

