import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import './brande.css'

const Brande = () => {
  return (
    <div>
      <div className="gpt3_Brande-container section_Padding">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="attlasian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brande