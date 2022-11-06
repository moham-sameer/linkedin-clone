import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info'
import  FiberManualRecordIcon  from '@mui/icons-material/FiberManualRecord'
const Widgets = () => {
    // const newsArticles = (heading,subtitle)=>{
       
    // }
  return (
    <div className='widgets'>
      <div className='widgets_header'>
       <h2>LinkedIn News</h2>
       <InfoIcon/>
      {/* {newsArticles("Muhammad Sameer is back","Top News - 786" )} */}
    
      </div>
      <div className='widgets_articles'>
         <div className='widgets_articleleft'>
            <FiberManualRecordIcon/>
         </div>
         <div className='widgets_articleright'>
            <h4>Muhammad Sameer is back</h4>
            <p>Top News - 786"</p>
         </div>
        </div>
      <div className='widgets_articles'>
         <div className='widgets_articleleft'>
            <FiberManualRecordIcon/>
         </div>
         <div className='widgets_articleright'>
            <h4>Muhammad Sameer is back</h4>
            <p>Top News - 786"</p>
         </div>
        </div>
      <div className='widgets_articles'>
         <div className='widgets_articleleft'>
            <FiberManualRecordIcon/>
         </div>
         <div className='widgets_articleright'>
            <h4>Muhammad Sameer is back</h4>
            <p>Top News - 786"</p>
         </div>
        </div>
      <div className='widgets_articles'>
         <div className='widgets_articleleft'>
            <FiberManualRecordIcon/>
         </div>
         <div className='widgets_articleright'>
            <h4>Muhammad Sameer is back</h4>
            <p>Top News - 786"</p>
         </div>
        </div>
      <div className='widgets_articles'>
         <div className='widgets_articleleft'>
            <FiberManualRecordIcon/>
         </div>
         <div className='widgets_articleright'>
            <h4>Muhammad Sameer is back</h4>
            <p>Top News - 786"</p>
         </div>
        </div>
      <div className='widgets_articles'>
         <div className='widgets_articleleft'>
            <FiberManualRecordIcon/>
         </div>
         <div className='widgets_articleright'>
            <h4>Muhammad Sameer is back</h4>
            <p>Top News - 786"</p>
         </div>
        </div>
     
    </div>
  )
}

export default Widgets
