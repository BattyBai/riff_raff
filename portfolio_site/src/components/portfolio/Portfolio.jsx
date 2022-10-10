import React from 'react'
import './portfolio.scss'

export default function Portfolio() {

  const data = [
    {
      id: "1",
      title: "KneadIt",
      desc: "Recipe baking app using JavaScript, Express.js and MongoDB",
      img: "assets/kneadIt.jpeg"
    },
    {
      id: '2',
      title: 'The App.Post',
      desc: 'A satirical news posting site using JavaScript, Django, and PostgreSQL',
      img: 'assets/news-project-front.jpeg'
    },
    {
      id: '3',
      title: 'Budget Buddy',
      desc: 'Account budgeting app allowing users to input transactions to keep track of their balance. Built using Ruby, Ruby on Rail and PostgreSQL',
      img: 'assets/budgtbuddy.jpeg'
    }
  ]
  return (
    <div className='portfolio' id="portfolio">
      <div className="slider">
        {<div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                {/* <div className="imageContainer">
                  <img src="" alt="" />
                </div> */}
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda placeat cumque rem iusto cum veniam eveniet. Eligendi veritatis dolorem.</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/news-project-front.jpeg" alt="" />
            </div>
          </div>
        </div>}
      </div>
      <img src="assets/004-down-arrow.png" className='arrow left' alt="" />
      <img src="assets/004-down-arrow.png" className='arrow right' alt="" />
    </div>
  )
}
