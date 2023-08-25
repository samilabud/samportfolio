import React from "react";

export const indexenglish = () => {
  return (
    <>
      <div id="hero" className="jumbotron">
        <div className="container">
          <h1 className="hero-title load-hidden">
            Hi, my name is <span className="text-color-main">Samil Abud</span>
            <br />
            I'm a web developer!
          </h1>
          <p className="hero-cta load-hidden">
            <a className="cta-btn cta-btn--hero" href="#about">
              Know more
            </a>
          </p>
        </div>
      </div>
      <section id="about">
        <div className="container">
          <h2 className="section-title">About me</h2>
          <div className="row about-wrapper">
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__image">
                <img
                  className="img-fluid rounded shadow-lg"
                  height="auto"
                  width="300px"
                  src="./assets/profile.jpg"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  I'm a lover of code and developing logic, my passion is
                  problem solving. I would say I'm very curious because I always
                  seeking new challenges to getting better at myself always.
                </p>
                <p className="about-wrapper__info-text">
                  Currently, I'm a team leader at a development department
                  inside IT in BHD Leon, I like to be involved in building
                  software from scratch, optimize applications, looking for bugs
                  and fix them, create flowcharts, team work to achieve great
                  things together, looking for the best way to do the job and
                  most of all "coding" 🤗.
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="/assets/Samil_Abud_Resume.pdf"
                  >
                    See Resume
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    class="cta-btn"
                    href="https://www.codewars.com/users/samilabud"
                  >
                    <img
                      alt="codewars badge"
                      width="150"
                      src="https://www.codewars.com/users/samilabud/badges/micro"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /END About Section */}

      {/* **** Projects Section **** */}
      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">
              Current Personal Projects
            </h2>

            {/* Each .row is a project */}
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">
                    Web Project - Juguitos Light
                  </h3>
                  <div>
                    <p className="mb-4">
                      Web portal built with PHP / WordPress. The CSS, Images,
                      and Optimizations of the portal done by me. This portal is
                      oriented to sell low calories beverages to people that
                      want to get lose weight as people that are diabetics
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://juguitoslight.com"
                  >
                    See online
                  </a>
                  {/* <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
                  Source Code
                </a> */}
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="project-wrapper__image">
                  <a
                    href="https://juguitoslight.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div data-tilt className="thumbnail rounded">
                      <img
                        className="img-fluid"
                        src="./assets/project.jpg"
                        alt="Web Project - Juguitos Light"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* /END Project */}
            {/* Each .row is a project */}
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">
                    Web Project - Crypto-Prices
                  </h3>
                  <div>
                    <p className="mb-4">
                      Web portal built with REACT, use the API of CoinBase to
                      show the cryptocurrency prices, it has your own API
                      created with NodeJS to provide an authentication system
                      that is based in PostgreSQL.
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://samcryptoprices-cddeb3ccb8ee.herokuapp.com/"
                  >
                    See online
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="project-wrapper__image">
                  <a
                    href="https://samcryptoprices-cddeb3ccb8ee.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div data-tilt className="thumbnail rounded">
                      <img
                        className="img-fluid"
                        src="./assets/projectCryptoPrices.jpg"
                        alt="Crypto-Prices"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* /END Project */}
            {/* Each .row is a project */}
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">
                    Web Project - E-commerce
                  </h3>
                  <div>
                    <p className="mb-4">
                      Final Project created with Zero to Mastery team (Complete
                      React Developer in 2021). Developed using React (Redux,
                      Hooks, Saga, HOC, GraphQL), integrated with Stripe and
                      with Firebase. You can register and try to buy any item
                      from your PC or from your Mobile.
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://samcrowncommerce.herokuapp.com/"
                  >
                    See online
                  </a>
                  {/* <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
                  Source Code
                </a> */}
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="project-wrapper__image">
                  <a
                    href="https://samcrowncommerce.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div data-tilt className="thumbnail rounded">
                      <img
                        className="img-fluid"
                        src="./assets/projectSamCommerce.jpg"
                        alt="Web Project - SamCommerce"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* /END Project */}
            {/* Each .row is a project */}
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">
                    Web Project - FaceRecognition
                  </h3>
                  <div>
                    <p className="mb-4">
                      Final Project created with Zero to Mastery team (The
                      Complete Web Developer in 2020). Built with React (HTML,
                      CSS, JavaScript), this uses an API
                      (https://apifacesrecognition.herokuapp.com/) created in
                      class too, at general way is based in NodeJS, Express,
                      PostgreSQL con KnexJS. You can register and try to scan
                      any image and this application will detect faces using
                      Clarifai's AI.
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="https://webfacesrecognition.herokuapp.com"
                  >
                    See online
                  </a>
                  {/* <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
                  Source Code
                </a> */}
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="project-wrapper__image">
                  <a
                    href="https://webfacesrecognition.herokuapp.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div data-tilt className="thumbnail rounded">
                      <img
                        className="img-fluid"
                        src="./assets/projectAFR.jpg"
                        alt="Web Project - FaceRecognition"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* /END Project */}
            {/* Each .row is a project */}
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">
                    Web Project - RoboFriends
                  </h3>
                  <div>
                    <p className="mb-4">
                      This project had been created with Zero to Mastery's team.
                      Built with React (HTML, CSS, JavaScript), uses an API, is
                      organized and optimized.
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="cta-btn cta-btn--hero"
                    href="http://samrobofriends.netlify.app"
                  >
                    See online
                  </a>
                  {/* <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
                  Source Code
                </a> */}
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="project-wrapper__image">
                  <a
                    href="http://samrobofriends.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div data-tilt className="thumbnail rounded">
                      <img
                        className="img-fluid"
                        src="./assets/projectrf.jpg"
                        alt="Web Project - RoboFriends"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* /END Project */}
          </div>
        </div>
      </section>
      {/* /END Projects Section */}

      {/* **** Contact Section **** */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              To contact me just send me an Email
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              className="cta-btn cta-btn--resume"
              href="mailto:samilabud@gmail.com"
            >
              samilabud@gmail.com
            </a>
          </div>
        </div>
      </section>
      {/* /END Contact Section */}
    </>
  );
};

export default React.memo(indexenglish);
