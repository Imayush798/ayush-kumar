import './about.css'
import Image from '../../images/about.jpg'
import resume from '../../images/ayush_kumar_resume.pdf'
import Card from '../../components/Card'
import data from './data'
import {HiDownload} from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
      <div className=" container  about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={Image} alt="about image " />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>

                </Card>
              ))
            }
            </div>
            <p>Hello, I'm Ayush Kumar, a passionate front-end developer with a strong focus on React.js. Currently pursuing a B.Tech. degree in Information Technology, I am eager to apply my skills and knowledge in a professional setting.</p>
            <p>If you are looking for a dedicated and skilled front-end developer with expertise in React.js, HTML, CSS, and JavaScript, and strong problem solving skills, I would love to connect with you. Whether it's a full-time role, part-time engagement, or an internship opportunity, let's explore how we can work together to create exceptional web experiences. Feel free to reach out to me on LinkedIn!</p>
            <a href={resume} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About