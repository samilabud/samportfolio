
import React,{useEffect, useState} from 'react';
import initTilt from './js/tilt';
import {initSr} from './js/sr';
import $ from 'jquery';
import './App.css';

import {index as Home} from './pages/home/index.component';
import {indexenglish as EnglishHome} from './pages/home/indexenglish.component';

function App() {
  const [langSelected, setLangSelected] = useState('Español');
  useEffect(()=>
  {
    initSr();
    initTilt();


    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
      }
    });
    
  },[langSelected])

  const languages = ['Español','English'];
  const languageHandler = (event) => {
    setLangSelected(event.target.value);
  }

  const renderswitchlang=()=>{
    switch(langSelected){
      case 'Español':
        return <Home />
      case 'English':
        return <EnglishHome />
      default:
        return <Home />
    }
    
  }

  return (
    <>
      <div id="top">
        <div className="chooselang">
          <div id="langselector">
          <span>{langSelected==='Español'?'Idioma':'Language'}: </span>
            <select onChange={languageHandler}>
              {
                languages.map((value,key)=>(
                  <option key={key}>{value}</option>
                  )
                )
              }
            </select>
          </div>
        </div>
      </div>

      
    {renderswitchlang()}
    

    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a href="https://twitter.com/samilabud" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter fa-inverse"></i>
          </a>
          <a href="https://www.linkedin.com/in/samil-abud-11b86318/" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a href="https://github.com/samilabud" target="_blank" rel="noreferrer">
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>

      </div>
    </footer>


    </>
  );
}



export default App;
