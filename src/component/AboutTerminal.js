import React,{Fragment,useEffect, useRef} from 'react'
import { init } from "ityped";


const AboutTerminal = () => {

    const textRef = useRef();
    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["My Phone number is 416-525-5240", "My email is robbierao93@hotmail.com"],
      });
    }, []);


    return (
        <Fragment>
<div className="terminal space shadow">
    <div className="top">
        <div class="btns">
            <span className="circle red"></span>
            <span className="circle yellow"></span>
            <span className="circle green"></span>
        </div>
        <div className="title">bash -- 70x32</div>
    </div>
    <pre className="body">
    <span className="line1">$ NPM start:
    
    </span>  
    <p classNmae="line2"> My name is Robbie, I'm a Graduate
     in University Of Toronto
     </p>
     <p> /Computer Science background.  I have
      a great passion for Web Development!</p>
      <br/>
     <br/>
     <br/>
     <span className="line4" ref={textRef}></span>
     <br/>
     <br/>
     <br/>
     
     <p className = "line3">glad to hear from you!</p>
   
     <div className="cursor"></div>
  
    </pre>
</div>
</Fragment>
    )
}

export default AboutTerminal
