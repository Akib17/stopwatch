import React, { useState, useEffect, useRef, Component } from 'react';
import './App.css';
import Title from './Title/Title';
import Countdown from './Countdown/Countdown';
import Controller from './Controller/Controller';
import Lap from './Laps/Lap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: {
        min: 0,
        sec: 0,
        mili: 0
      },
      laps: []
    }
  }

  getStart() {
    this.intervalID = setInterval(() => {
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili

      if (mili >= 10) {
        sec = sec + 1
        mili = 0
      }

      if (sec >= 60) {
        min = min + 1
        sec = 0
      }

      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1
        }
      })

    }, 100);
  }

  getPause() {
    clearInterval(this.intervalID)
  }

  getReset() {
    this.setState({
      time: {
        min: 0,
        sec: 0,
        mili: 0
      }
    })
  }

  getLap() {
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    })
    console.log(this.state.laps)
  }
  
  render() {
    // console.log(this.state.time.mili)
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Title />
            <Countdown time={this.state.time} />
            <Controller start={this.getStart.bind(this)} reset={this.getReset.bind(this)} pause={this.getPause.bind(this)} lap={this.getLap.bind(this)} />
            <Lap laps={this.state.laps} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;