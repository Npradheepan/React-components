 import React, { Component } from "react";

 class Message extends Component {
     constructor () {
         super()
         this.state =  {
            message: 'This Fuction Testing'
         }
     }
       Correction() {
          this.setState({
              message: 'Testing is Finished!'
          })
      
     }
     render () {
         return(
             <>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.Correction()}>Change</button>
             </>
         )
     }
 }

 export default Message;