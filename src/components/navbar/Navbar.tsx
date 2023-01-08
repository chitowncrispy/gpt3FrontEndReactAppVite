import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
    <p><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></p>
    <p><a href='#wgpt3' onClick={() => setToggleMenu(false)}>What is GPT?</a></p>
    <p><a href='#possibility' onClick={() => setToggleMenu(false)}>Open AI</a></p>
    <p><a href='#features' onClick={() => setToggleMenu(false)}>Case Studies</a></p>
    <p><a href='#blog' onClick={() => setToggleMenu(false)}>Library</a></p>
    </>
  )

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"></img>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        { toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}></RiCloseLine> 
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line> 
        }
        {
          toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar