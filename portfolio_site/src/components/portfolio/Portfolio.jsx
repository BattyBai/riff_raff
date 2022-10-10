import React from 'react'
import { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'

export default function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web'
    },
    {
      id: 'mobile',
      title: 'Mobile'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id: 'content',
      title: 'Content'
    }
  ];

  return (
    <div className='portfolio' id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList 
          title={item.title} 
          active={selected=== item.id} 
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/kneadIt.jpeg" alt="" />
          <h3>Baking/Recipe App</h3>
          <h4>JavaScript, Express.js, MongoDB</h4>
        </div>
        <div className="item">
          <img src="assets/news-project-front.jpeg" alt="" />
          <h3>Baking/Recipe App</h3>
          <h4>JavaScript, Express.js, MongoDB</h4>
        </div>
        <div className="item">
          <img src="assets/budgtbuddy.jpeg" alt="" />
          <h3>Baking/Recipe App</h3>
          <h4>JavaScript, Express.js, MongoDB</h4>
        </div>
      </div>
    </div>
  )
}
