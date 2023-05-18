import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image"
import "../styles/about-module.css"

export default function About({ data }) {
    return (
        <Layout>
            <div className="container">
                <h2>What Do We Offer?</h2>

                <div className="about_section">

                    <div className="col">
                        <div className="col_image">
                            <Img fluid={data.file1.childImageSharp.fluid} />
                        </div>
                        <div className="col_details">
                            <h2>Customized Experiences</h2>
                            <p>We created Knowing Cuba for the traveler who seeks unique experiences. The traveler who wants to return home with unique stories, something different to show, an experience no one else has tried. Let us know the kind of Cuban experience you seek and we'll plan it for you!</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="col_image">
                            <Img fluid={data.file1.childImageSharp.fluid} />
                        </div>
                        <div className="col_details">
                            <h2>Leaders in the market</h2>
                            <p>With over 20 years of experience receiving travelers from all over the world, our name is recognized all over Cuba. Whether you’re traveling alone, or with a group, our experienced team can help with every aspect of your trip, and will recommend the best options.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="col_image">
                            <Img fluid={data.file1.childImageSharp.fluid} />
                        </div>
                        <div className="col_details">
                            <h2>24/7 Support</h2>
                            <p>We know that when you are in a foreign country, things don’t always go as planned. Our local team in Havana is available to help with any emergency. Once you book a trip with us, you’ll have access to our 24/7 emergency number to make sure you travel worry-free.</p>
                        </div>
                    </div>

                </div>



                <div className="why_us_section">
                    <div className="why_us_image">
                        <Img fluid={data.file2.childImageSharp.fluid} />
                    </div>
                    <div className="why_us_details">
                        <h1> Why Us?</h1>
                        <p>We're a team of experienced travel agents and sales agents based in Cuba, providing personalized services to groups, corporate companies, and individual travelers from all over the world since 2002. We love our country, and we want the world to experience it and get to know it the way we do. Nothing makes us happier than seeing our customers smile, hearing what a great experience they had in Cuba. We look forward to being your local host agency.</p>
                        <Link to="/">Learn More</Link>

                    </div>
                </div>
                
            </div>

        </Layout>
    )
}


export const Quert = graphql`
query Image1AndImage2 {
    file1: file(relativePath: {eq: "icon_tailored_travel.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file2: file(relativePath: {eq: "why_us_image.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
`



{/* <div className="about-card-1">
<Img fluid={data.file.childImageSharp.fluid} />
</div>
<div class="card-body">
<h5 class="card-title">Customized Experiences</h5>
<p class="card-text">We created Knowing Cuba for the traveler who seeks unique experiences. The traveler who wants to return home with unique stories, something different to show, an experience no one else has tried. Let us know the kind of Cuban experience you seek and we'll plan it for you!</p>
</div> */}