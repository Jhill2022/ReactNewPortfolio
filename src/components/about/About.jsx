import React from 'react'
import ME from "../../assets/mebooks.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import { AboutStyle } from './AboutStyled'

const About = () => {
  return (
    <AboutStyle id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati commodi aut tempore qui maxime voluptatem, enim ut cum laborum ipsum minus illo placeat magnam quos quo suscipit aspernatur natus similique!</p>

         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </AboutStyle>
  )
}

export default About
