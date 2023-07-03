import React from 'react'
import Women from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='gpt3_Possibility-container section_Padding' id='caseStudies'>
      <div className="gpt3_Possibility-img">
        <img src={Women} alt="women" />
      </div>
      <div className="gpt3_Possibility-content">
        <p className='p-blue'>Request Early Access to Get Started</p>
        <div className="gpt3_Possibility-conten-paragraph">
          <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <p className='p-orenge'>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility