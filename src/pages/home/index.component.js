import React from 'react';

export const index = () => {
  return (
    <>
    <div id="hero" className="jumbotron">
        <div className="container">
          <h1 className="hero-title load-hidden">
            Hola, mi nombre es <span className="text-color-main">Samil Abud</span>
            <br />
            Soy un desarrollador de paginas web!
          </h1>
          <p className="hero-cta load-hidden">
            <a className="cta-btn cta-btn--hero" href="#about">Conoce más</a>
          </p>
        </div>
      </div>
      
      <section id="about">
      <div className="container">
        <h2 className="section-title">
          Sobre mi
        </h2>
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
                Soy un amante del código y la lógica de programación, me encanta resolver problemas. 
                Diría que soy muy curioso ya que siempre ando buscando retos que me hagan superarme a mí mismo siempre.
              </p>
              <p className="about-wrapper__info-text">
                Actualmente soy líder de desarrollo en un departamento dentro del área de tecnología en BHDLeon, 
                me gusta estar involucrado en crear sistemas desde 0, optimizar aplicaciones, buscar bugs y resolverlos, 
                realizar diagramas de flujo, trabajar en equipo y lograr grandes cosas en conjunto, buscar la mejor 
                forma de hacer las cosas y más que todo "tirar código" 🤗.
              </p>
              <span className="d-flex mt-3">
                <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--resume" href="https://github.com/samilabud/portfolio/blob/master/src/assets/CV_SamilAbud_2020.pdf">
                  Ver Curriculum
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    { /* /END About Section */ }

    { /* **** Projects Section **** */ }
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">
            Proyectos Personales Actuales
          </h2>

          { /* Each .row is a project */ }
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Proyecto Web Juguitos Light</h3>
                <div>
                  <p className="mb-4">
                    Un portal desarrollado en PHP con Wordpress. CSS, Imagenes y Optimación de portal
                    realizadas por mi. Este portal esta orientado a la venta de bebidas bajas en calorias
                    tanto para personas que quieran bajar de peso como para personas diabeticas.
                  </p>
                </div>
                <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href="https://juguitoslight.com">
                  Ver en linea
                </a>
                { /* <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
                  Source Code
                </a> */ }
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <a href="https://juguitoslight.com" target="_blank" rel="noreferrer">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src="./assets/project.jpg" alt="Juguitos Light" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          { /* /END Project */ }
          { /* Each .row is a project */ }
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Proyecto Web Crypto Prices</h3>
                <div>
                  <p className="mb-4">
                    Un portal desarrollado con REACT, utiliza el API de CoinBase para mostrar el precio de las criptomonedas y cuenta con su propio API realizado en NodeJS para proporcionar un 
                    sistema de autenticacion que se base en PostgreSQL.
                  </p>
                </div>
                <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href="https://samcryptoprices.herokuapp.com">
                  Ver en linea
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <a href="https://samcryptoprices.herokuapp.com" target="_blank" rel="noreferrer">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src="./assets/projectCryptoPrices.jpg" alt="Crypto Prices" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          { /* /END Project */ }
           { /* Each .row is a project */ }
           <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Proyecto Web E-commerce</h3>
                <div>
                  <p className="mb-4">
                    Proyecto Final creado junto al equipo de Zero to Mastery (Complete React Developer in 2021). 
          Programado con React (Redux, Hooks, Saga, HOC, GraphQL), integrado con el sistema de pagos Stripe y con manejo de autenticación con Firebase.
          Puedes registrarte e intentar comprar cualquier articulo desde la PC o Celular.
                  </p>
                </div>
                <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href="https://samcrowncommerce.herokuapp.com/">
                  Ver en linea
                </a>
                { /* <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
                  Source Code
                </a> */ }
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <a href="https://samcrowncommerce.herokuapp.com/" target="_blank" rel="noreferrer">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src="./assets/projectSamCommerce.jpg" alt="SamCommerce" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          { /* /END Project */ }
          { /* Each .row is a project */ }
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Proyecto Web FaceRecognition</h3>
                <div>
                  <p className="mb-4">
                    Proyecto Final creado junto al equipo de Zero to Mastery. 
          Realizado con React (html, css, javacript), usa un API (https://apifacesrecognition.herokuapp.com/) creado en el curso el cual en general se basa en NodeJS, Express, PostgreSQL con KnexJS.
          Puedes registrarte y escanear cualquier imagen y detectara rostros usando la IA de Clarifai.
                  </p>
                </div>
                <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href="https://webfacesrecognition.herokuapp.com">
                  Ver en linea
                </a>
                { /* <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
                  Source Code
                </a> */ }
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <a href="https://webfacesrecognition.herokuapp.com" target="_blank" rel="noreferrer">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src="./assets/projectAFR.jpg" alt="Proyecto Web FaceRecognition" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          { /* /END Project */ }
		  { /* Each .row is a project */ }
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Proyecto Web RoboFriends</h3>
                <div>
                  <p className="mb-4">
                    Proyecto creado en conjunto, curso Complete Web Developer de Zero to Mastery. 
					Realizado con React (html, css, javacript), usa un API, esta organizado y optimizado.
                  </p>
                </div>
                <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href="http://samrobofriends.netlify.app">
                  Ver en linea
                </a>
                { /* <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
                  Source Code
                </a> */ }
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <a href="http://samrobofriends.netlify.app" target="_blank" rel="noreferrer">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src="./assets/projectrf.jpg" alt="RoboFriends" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          { /* /END Project */ }

        </div>
      </div>
    </section>
    { /* /END Projects Section */ }

    { /* **** Contact Section **** */ }
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          Contacto
        </h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            Para contactarme solo envíame un correo electrónico
          </p>
          <a
            target="_blank" rel="noreferrer"
            className="cta-btn cta-btn--resume"
            href="mailto:samilabud@gmail.com"
            >samilabud@gmail.com</a>
        </div>
      </div>
    </section>
    { /* /END Contact Section */ }
    </>
  )
}

export default React.memo(index);