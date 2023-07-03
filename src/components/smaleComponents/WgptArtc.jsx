import React from 'react'
import '../smaleComponents/WgptArc.css'

const WgptArtc = (props) => {
  return (
    <div className='gpt3_wgptArtc-container'>
      <div className="gpt3_wgptArtc-smaleHead"></div>
      <div className="gpt3_wgptArtc-content">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>  
    </div>
  )
}

export default WgptArtc