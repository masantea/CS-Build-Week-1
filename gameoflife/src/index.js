import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Main extends React.Component{
  constructor(){
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  render(){
    return(
      <div>
        <h1> The Game of Life</h1>
        <Grid/>
        <h2>Generation: {this.state.generation} </h2>

      </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
