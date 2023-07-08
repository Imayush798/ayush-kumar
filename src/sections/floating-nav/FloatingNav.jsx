import './floating-nav.css' 
import data from './data'


import React from 'react'
import { useState } from 'react'

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <floatingNav>
          {
            data.map(item=> <a className={activeNav===`${item.link}` ? 'active' : ''} onClick={() => setActiveNav(`${item.link}`)}  key={item.id} href={item.link}>{item.icon}</a>)
          }
    </floatingNav>
  )
}

export default FloatingNav