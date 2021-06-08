import React from 'react'
import myVideo from "../videos/techvideo.mp4"

const VideoCover = () => {
    const mystyle = {
        position:"absolute",
        zIndex:"9999999999"
        
      };

      const videoContainer = {
        display: 'flex', 
        justifyContent: 'center',  
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        height:'100%',
       
      }
    return (
        <div style={videoContainer}>
     <div style={mystyle}>
     <h1 style={{ color: 'white' }}>My name is Robbie</h1>

     <h1 style={{ color: 'white' }}> &nbsp;&nbsp; I am a Web Dev</h1>
     </div>
            <video autoPlay loop muted
            style ={{
                position: "relative",
                width: "100%",  
                height:"100%",
                objectFit: "cover"
            }}>
          <source src={myVideo} type="video/mp4" />

            </video>
        </div>
    )
}

export default VideoCover
