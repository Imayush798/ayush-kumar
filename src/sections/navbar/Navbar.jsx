 import './navbar.css'
 import data from './data'
 import logo from '../../images/logo.jpg'
 import {IoIosColorPalette} from 'react-icons/io'

const Navbar = () => {
  return (
    <nav>
       <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
           <img src={logo} alt="logo"/>
        </a>
        <ul className='nav__menu'>
          {
            data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        {/* <button id='theme__icon'><IoIosColorPalette/></button> */}
       </div>
        
    </nav>
  )
}

export default Navbar