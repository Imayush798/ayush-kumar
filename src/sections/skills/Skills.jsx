import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
        <h2>Skills I Have</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>HTML</h4>
                     <small className="text-light">Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>CSS</h4>
                     <small className="text-light">Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div><h4>JavaScript</h4>
                     <small className="text-light">Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div><h4>Bootstrap</h4>
                     <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>React.js</h4>
                     <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                </div>
            </div>


            <div className="experience__backend">
            <h3>Backend Development</h3>
                <div className="experience__content">
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>Node JS</h4>
                     <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>MongoDB</h4>
                     <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>MySQL</h4>
                     <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>PHP</h4>
                     <small className="text-light">Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                     <h4>SQL</h4>
                     <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills