import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import "../styles/about-module.css"

export default function About({ data }) {

    const [about, setAbout] = useState();
    const [whyUs, setWhyUs] = useState();

    const getAboutData = async () => {
        let fetchData = await fetch("http://localhost:1337/api/abouts?populate=*");
        let jsonData = await fetchData.json();
        let finalData = jsonData.data
        // console.log("finalData", finalData);
        setAbout(finalData);


        const whyUsfetchData = await fetch("http://localhost:1337/api/about-section2s?populate=*");
        const whyUsjsonData = await whyUsfetchData.json();
        let resultData = whyUsjsonData.data[0]
        // console.log("resultData", resultData);
        setWhyUs(resultData);
    };



    useEffect(() => {
        getAboutData();
    }, []);


    return (
        <Layout>
            <div className="container">
                <h2>{whyUs?.attributes.titlMain}</h2>

                <div className="about_section">
                    {about?.map(ele => (
                        <div className="col" key={ele.id}>
                            <div className="col_image">
                                <img src="http://localhost:1337/uploads/icon_tailored_travel_cc2fcedb99.png" alt="loading.." />
                            </div>
                            <div className="col_details">
                                <h2>{ele.attributes.title}</h2>
                                <p> {ele.attributes.body} </p>
                            </div>
                        </div>
                    ))};
                </div>

                <div className="why_us_section">
                    <div className="why_us_image">
                        <img src="http://localhost:1337/uploads/thumbnail_why_us_image_247ab8c33d.jpg" alt="loading.."/>
                    </div>
                    <div className="why_us_details">
                        <h1> {whyUs?.attributes.title} </h1>
                        <p> {whyUs?.attributes.body} </p>
                        <Link to="/">Learn More</Link>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

