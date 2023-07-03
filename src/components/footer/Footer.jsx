import React from 'react'
import logo from '../../assets/GPT-3 (1).png'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3_Footer-container'>
      <div className="gpt3_Footer-head-container">
        <h1 className='gradient-text'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3_Footer-logo_Links">
        <div className="gpt3_Footer-logo">
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3_Footer-Links">
          <div className="gpt3_Footer-Links-links">
            <span>Links</span>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3_Footer-Links-company">
            <span>Company</span>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3_Footer-Links-Get-in-touch">
            <span>Get in touch</span>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <div className="gpt3_Footer-Copy-right">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer