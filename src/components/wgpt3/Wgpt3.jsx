import React from 'react'
import WgptArtc from '../smaleComponents/WgptArtc'
import './wgpt3.css'

const Wgpt3 = () => {
  return (
      <div className="gpt3_wgpt3-container section_Padding" id='wgpt'>

        <div className="gpt3_wgpt3-head-article">
          <WgptArtc title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
        </div>

        <div className="gpt3_wgpt3-pragraph">
          <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>

        <div className="gtp3_wgpt3-footer-articles">
          
          <WgptArtc title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'/>

          <WgptArtc title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>

          <WgptArtc title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        </div>
      </div>
  )
}

export default Wgpt3