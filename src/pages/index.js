import React from "react";
import Layout from "../components/layout";
import "../styles/homepage-module.css"


export default function home() {
  return (
    <Layout>
      <div className="background">
        <div className="background_text">
          <h1>Welcome To Our</h1>
          <h1 className="tag_line">MadForTravelling</h1>
          <h1>Web Site</h1>
        </div>

        <div className="search_box">
          <input type="text" placeholder="Your City" />
          <input type="text" placeholder="Destination" />
          <button type="submit">Search</button>
        </div>
      </div>
    </Layout>
  )
}


