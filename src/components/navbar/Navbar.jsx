import React , {useState} from 'react'
import { RiMenu3Line , RiCloseLine } from "react-icons/ri";
import './navbar.css'
import logo from '../../assets/GPT-3 (1).png'
import Menu from '../smaleComponents/Menu';

const Navbar = () => {

  const [toggeleMenu , setToggeleMenu] = useState(false)

  return (
    <div className='gpt3_Navbar section_Padding'>
      <div className="gpt3_Navbar-logo">
        <img src={logo} alt="gpt3 logo" />
      </div>
      <div className="gpt3_Navbar-links">
        <Menu/>
      </div>
      <div className="gpt3_Navbar-btns">
        <p>sign in</p>
        <button>sign up</button>
      </div>
      <div className="gpt3_menu">
        { !toggeleMenu ? <RiMenu3Line color="#fff" size={27} onClick={()=> setToggeleMenu(true)}/> : <RiCloseLine color="#fff" size={27} onClick={()=> setToggeleMenu(false)}/> }
        { toggeleMenu && <div className='gpt3_menu-links scale-up-center'>
          <Menu/>
          <div className="gpt3_menu-btns">
            <p>sign in</p>
            <button>sign up</button>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Navbar