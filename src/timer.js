import { Component } from "react";
import React from "react";
class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            hour:0,
            min:0,
            sec:0
        }
    }
    startHandler = ()=>{
        // this.setState({
        //     hour:this.state.hour,
        //     min:this.state.min,
        //     sec:this.state.sec
        // });
            setInterval(()=>{
                this.state.sec++;
                if(this.state.sec === 60)
                {
                    this.state.sec = 0;
                    this.state.min +=1;
                }
                else{
                    this.state.min = this.state.min;
                }
                if(this.state.min === 60){
                    this.state.min = 0;
                    this.state.hour +=1;
                }
                else{
                    this.state.hour=this.state.hour;
                }
            })
            this.setState({
                hour:this.state.hour,
                min:this.state.min,
                sec:this.state.sec
            });
            console.log(`${this.state.sec}`);
        }
        
render(){
    return(
        <div>
        <div className="timer">
            <p className="time">{this.state.hour}:
                {this.state.min}:{this.state.sec}</p>
        </div>
        <div className="buttons">
          <button onClick={this.startHandler} className="start">start</button>
          <button className="stop">stop</button>
          <button className="reset">reset</button>
        </div>
        </div>
    )
}
}

export default Timer;