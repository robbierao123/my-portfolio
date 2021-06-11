import React,{useEffect, useRef} from 'react'
import myVideo from "../videos/techvideo.mp4"
import { init } from "ityped";

const VideoCover = () => {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web Developer", " Great Artist"],
    });
  }, []);
  
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

     <h1 style={{ color: 'white' }}> I am a <span ref={textRef}></span> </h1>
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
