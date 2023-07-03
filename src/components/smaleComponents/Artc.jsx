import React from 'react'
import './Artc.css'

const Artc = (props) => {
  return (
    <div className='gpt3_Artc-container'>
      <div className="gpt3_Artc-img-container">
        <img src={props.img} alt="" />
      </div>
      <div className="gpt3_Artc-context-container">
        <div className="gpt3_Artc-context-container-head">
          <span>Sep 26, 2021</span>
          <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Artc