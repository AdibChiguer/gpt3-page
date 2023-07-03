import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

const Header = () => {
  return (
    <div className='gpt3_header section_Padding' id='home'>
      <div className="gpt3_header-main-content">
        <div className="gpt3_header-h">
          <h1 className='gradient-text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <div className="gpt3_header-paragraph">
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <div className="gtp3_header-inpute">
          <input type="text" placeholder='Your Email Address'/>
          <button>get started</button>
        </div>
        <div className="gpt3_header-opinion">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3_header-ai-img">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header