import  './footer.css'
import data from '../navbar/data'
import Data from './data'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>&lt;aYuSh&#47;&gt;</a>
      <ul className='permalinks'>
          {
            data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>

        <div className="footer__socials">
          {
            Data.map(item=> <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
        <div className="footer__copyright">
          <small>
              &copy; - All rights reserved.
          </small>
        </div>

    </footer>
  )
}

export default Footer