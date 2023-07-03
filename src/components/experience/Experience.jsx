import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"
import { ExperienceStyle } from './ExperienceStyled'


const Experience = () => {

  const frontEnd = [
    {id:1,
    skill:"HTML",
    exper:"Experienced",
     },
    {id:2,
    skill:"CSS",
    exper:"Intermediate",
     },
    {id:3,
    skill:"Javascript",
    exper:"Experienced",
     },
    {id:4,
    skill:"BootStrap",
    exper:"Experienced",
     },
    {id:5,
    skill:"Tailwind",
    exper:"Experienced",
     },
    {id:6,
    skill:"React",
    exper:"Experienced",
     },
  
  ]

  const backEnd = [
    {id:1,
    skill:"Node Js",
    exper:"Intermediate",
     },
    {id:2,
    skill:"MongoDB",
    exper:"Experienced",
     },
    {id:3,
    skill:"PHP",
    exper:"Experienced",
     },
    {id:4,
    skill:"MySQL",
    exper:"Experienced",
     },
    {id:5,
    skill:"Python",
    exper:"Experienced",
     },
    ]
  return (
    <ExperienceStyle id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEnd.map((front) => {
              return  <article key={front.id} className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>{front.skill}</h4>
              <small className='text-light'>{front.exper}</small></div>
              
                     </article>
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEnd.map((back)=> {
              return  <article key={back.id} className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>{back.skill}</h4>
              <small className='text-light'>{back.exper}</small></div>
              
                     </article>
            })}
          </div>

        </div>
      </div>
    </ExperienceStyle>
  )
}

export default Experience