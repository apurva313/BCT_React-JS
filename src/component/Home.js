import React from 'react'
import '../css/Home.css';
import {NavLink} from 'react-router-dom';
import Img1 from '../images/cover.jpg';

const Home = () => {
  return <>
     <div className="main">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      </div>

    <div className="image">

        <img src={Img1} alt='image' width={1500} height={500}></img>

    </div>

  </>
}

export default Home
