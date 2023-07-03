import React from 'react'
import Artc from '../smaleComponents/Artc'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'
import './article.css'

const Article = () => {
  return (
    <div className='gpt3_Article-container' id='library'>
      <div className="gpt3_Article-hear-content">
        <h1 className='gradient-text'>A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3_Article-Articles-content">
        <div className="gpt3_article-Articles-left">
        <Artc img={blog1} className='artc1'/>
        </div>
        <div className="gpt3_article-Articles-right">
          <Artc img={blog2} className='artc2'/>
          <Artc img={blog3} className='artc3'/>
          <Artc img={blog4} className='artc4'/>
          <Artc img={blog5} className='artc5'/>
        </div>
      </div>
    </div>
  )
}

export default Article