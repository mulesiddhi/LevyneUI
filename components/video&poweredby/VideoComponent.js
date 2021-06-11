import React from 'react'
import Video from '../icons/Video'

const VideoComponent = () => {
    return (
        <div className='boxwrap'>
            <div className='vid'>
                <Video/>
            </div>
            <div className="powered" >
          <div >powered by</div>
          <div>
            <img style={{ height: '20px'}} src="https://d33wubrfki0l68.cloudfront.net/9f03f2c373c4fcc9af5a6d5e4aa187671743b21f/2419c/images/logo.svg" className="footer-img" />
          </div>
        </div>
            </div>
        
    )
}

export default VideoComponent;