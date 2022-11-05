import React from 'react';
import './index.scss';
import Loder from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import porfolioData from '../../data/portfolio.json';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  console.log(porfolioData)



  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
        <div className='images-container'>
            {
                portfolio.map((port, idx) => {
                    return (
                        <div className='image-box' key={idx}>
                            <img 
                            src={port.cover}
                            className="portfolio-image"
                            alt='portfolio'/>
                            <div className='content'>
                                <p className='title'>{port.title}</p>
                                <h3 className='description'>{port.description}</h3>
                                <h4 className='languages'>{port.languages}</h4>
                                <button 
                                    className='btn-view'
                                    onClick={() => window.open(port.url)} >View</button>
                                    <button 
                                    className='btn-github'
                                    onClick={() => window.open(port.github)} >Repo</button>
                            </div>
                            
                        </div>
                    )
                })
            }

        </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split("")}
              idx={15} />
          </h1>
       <div>
        {renderPortfolio(porfolioData.portfolio)}
       </div>
      </div>
      <Loder type="pacman" />
    </>
  )
}
export default Portfolio
