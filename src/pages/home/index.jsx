import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import endpoints from "../../app/endpoints";





export const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.home, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);


  return (
    <HelmetProvider>
      <section id="home" className="home">
        {data ? (
          <div>
            <Helmet>
          <meta charSet="utf-8" />
          <title> {data.title}</title>
          <meta name="description" content={data.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${data.img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{data.greetings}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: data.animated_text,
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{data.about}</p>
                <div >
                  {data.buttons.map((item) => (
                    <Link to={item.route} key={item.name} className="text_2">
                      <div id={item.id} className="ac_btn btn ">
                        {item.name}
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        ): null}
        
      </section>
    </HelmetProvider>
  );
};