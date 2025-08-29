import React from 'react'
import video from '/projects/videoSites.mp4'

function Sites() {
  return (
    <section className="container">
      <h2 className="title">Sites</h2>
      <p className="description">
      Sites is a platform web to design and make your own webpage without the need of coding it. <br /><br />
      It works with some grabbable components and layouts, you can design, create and personalize your webpage with zero code
      This is the final project that I did for the school, I worked with the backend and worked in pace with all my team <br />
      </p>

      <div className="img-container">
        <video className="video" width={600} autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> 
        <p className='img-footer'>You can check its landing page here: <a className='link' href='https://littlesites.github.io/' target='_blank'>littlesites.github.io</a></p>
      </div>
    </section>
  )
}

export default Sites