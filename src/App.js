import React,{useState} from 'react';


function App() {
  const [time,setTime] = useState({h:0,m:0,s:0,ms:0});
  const [interv,setInterv] = useState();
  const [status,setStatus] = useState(0);
  
  
  const start = () =>{
    run();
    setInterv(setInterval(run,10));
    setStatus(1);
  }

  const stop = () =>{
    clearInterval(interv);
    setStatus(2);
  }

  const resume = () =>{
    run();
    setInterv(setInterval(run,10));
    setStatus(1);
  }

  const reset = () => {
    clearInterval(interv);
    setTime({h:0,m:0,s:0});
    setStatus(0);
  }

  var updatedH=time.h,updatedM=time.m,updatedS=time.s,updatedMS=time.ms;

  const run = () =>{
    if(updatedMS === 100)
    {
      updatedS +=1;
      updatedMS = 0
    }
    if(updatedS === 60)
    {
      updatedM +=1;
      updatedS =0;
    }
    if(updatedM === 60)
    {
      updatedH +=1;
      updatedM =0;
    }
    updatedMS++
    return setTime({h:updatedH,m:updatedM,s:updatedS,ms:updatedMS});
  }

  return (
    <div className="App">
         <div className="timer">
  <p className="time">{time.h}:{time.m}:{time.s}<span>{time.ms}</span></p>
        </div>
        <div className="buttons">
          {(status === 0)?
                <button onClick={start} className="start">start</button>:""
          }

          {(status === 1)?
            <div>
             <button onClick={stop} className="stop">stop</button>
             <button onClick={reset}className="reset">reset</button></div>:""
          }

          {(status === 2)?
            <div>
              <button onClick={resume} className="resume">resume</button>
             <button onClick={reset}className="reset">reset</button></div>:""
          }
        </div> 
    </div>
  );
}

export default App;
