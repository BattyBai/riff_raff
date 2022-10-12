import React from 'react'
import { useState } from 'react'
import './portfolio.scss'

export default function Portfolio() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: "1",
      title: "KneadIt",
      desc: "Multi-page baking app allowing the user to add, edit and view bread recipes. Built using JavaScript, Express.js and MongoDB",
      img: "assets/kneadIt.jpeg",
      url: 'https://secret-anchorage-27640.herokuapp.com/bread'
    },
    {
      id: '2',
      title: 'The App.Post',
      desc: 'Single-page satirical news posting site using JavaScript, Django, React, and PostgreSQL',
      img: 'assets/news-project-front.jpeg',
      url: 'https://news-project-front.herokuapp.com/'
    },
    {
      id: '3',
      title: 'Budget Buddy',
      desc: 'Account budgeting app allowing users login and input transactions to keep track of their balance. Built using Ruby, Ruby on Rail and PostgreSQL',
      img: 'assets/budgtbuddy.jpeg',
      url: 'https://budgtbuddy.herokuapp.com/'
    }
  ];

  const handleClick = (direction) => {
    direction === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1: 0 )
  }

  return (
    <div className='portfolio' id="portfolio">
      <div className="slider" style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) =>(
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                {/* <div className="imageContainer">
                  <img src="" alt="" />
                </div> */}
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <a href={d.url}>
                  <span>Link to the site!</span>
                </a>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/004-down-arrow.png" className='arrow left' alt="" onClick={() => handleClick('left')}/>
      <img src="assets/004-down-arrow.png" className='arrow right' alt="" onClick={() => handleClick('right')}/>
    </div>
  )
}
