import React from 'react';

class Block extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
          props: props,
        };
    }
    
  render() {

  const mystyle = {
      color: 'red'
    };
  console.log(this.state.props);

  return (
    <>
      <div class = "blockers" style={
        mystyle
        }>
      </div>
      
      <div className="bottom">
          <div className="white"></div>
      </div>


    </>
      );
    }
  }


  export default Block;