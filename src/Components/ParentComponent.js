import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
       super(props)
       this.state = {
          parentName :"Parent"
       }
       this.greetParent = this.greetParent.bind(this)   
     }
     greetParent (ChildName) {
         alert(`Hallo ${this.state.parentName}, ${ChildName}`)
     }
  render() {
    return (
      <div>
          <ChildComponent greethandler ={this.greetParent} />
      </div>

    )
  }
}

export default ParentComponent