import './header.css'
import image from '../../images/ayush.jpg'
import data from './data'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className="header__profile">
          <img src={image} alt="Header" />
        </div>
        <h3>Ayush Kumar</h3>
        <p>Hello, I'm Ayush Kumar, a passionate front-end developer with a strong focus on React.js. Currently pursuing a B.Tech degree in Information Technology.</p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>

        </div>
        <div className="header__socials">
          {
            data.map(item=> <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header