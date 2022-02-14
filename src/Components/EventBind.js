import React, { Component } from 'react'

 class EventBind extends Component {
     constructor (props) {
         super(props)
         this.state = {
             message: 'Hallo'
         }
         //Third Method
        //  this.ClikeHandler = this.ClikeHandler.bind(this)
     }
// First Methode in Event Handler
    //  ClikeHandler() {
    //     this.setState({
    //        message: "How are you!"
    //     });
    // }

    //Second Methode
    // ClikeHandler() {
    //     this.setState({
    //        message: "How are you!"
    //     });
    // }
    //Third Methode
    // ClikeHandler() {
    //      this.setState({
    //        message: "How are you!"
    //      });
    // }

    // Fourth
    ClikeHandler = () => {
        this.setState ({
            message: "How are you!"
        })
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* //First method */}
          {/* <button onClick={this.ClikeHandler.bind(this)}>Click</button> */}
          {/* Second Method */}
          {/* <button onClick={()=> {this.ClikeHandler()}}>Click</button> */}
          {/* third Method */}
          {/* <button onClick={this.ClikeHandler}>Click</button> */}
          {/* //Fourth Method */}
          <button onClick={this.ClikeHandler}>Click</button>

      </div>
    )
  }
}

export default EventBind