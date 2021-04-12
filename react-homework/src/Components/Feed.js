import React from 'react';
import Block from './Block';

class Feed extends React.Component {

    state = {
      showPosts: false,
      i: 0,
      colors: [],
      showopt: false
    }

    addBlock = (color) => {
        let newColors = this.state.colors;
        newColors.push(color);
        let newI = (this.state.i)++;
        console.log("newColors[newI]: ", newColors[newI]);
        console.log("mewI: ", newI);

        this.setState({
        showPosts: true,
        colors: newColors,
        i: newI,
      })
    }

    pickColorlayout = () => {
      if (this.state.showopt == false) {
        this.setState({
          showopt: true
        })
      }
      else{
        this.setState({
            showopt: false
        })
      }
    }
    
    render() {
      let postColor = this.state.colors[this.state.i];
      console.log("Post Color: " + postColor);

      return (
        <div className = 'mainfeed'>
          <div className="input">
            {this.state.showPosts ? <Block color={postColor}/> : null}
          </div>
          <div>
            <button class="button" onClick={this.pickColorlayout}>+ Post Block</button>
          </div>
            { this.state.showopt ?         <div className="pickblock">
          <div>
            <button className="red"  onClick={() => this.addBlock("rgb(134, 5, 5)")}></button>
            <button className="blue" onClick={() => this.addBlock("rgb(21, 0, 141)")}></button>
          </div>
          <div>
            <button className="green"  onClick={() => this.addBlock("rgb(59, 110, 0)")}></button>
            <button className="purple"  onClick={() => this.addBlock("rgb(58, 0, 97)")}></button>
          </div>
          </div>: null }   
        </div>
    
      );
    }
  }


  export default Feed;