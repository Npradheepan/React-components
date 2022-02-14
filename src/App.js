import React, { Component } from "react";
import './App.css'
import Great from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hallo from "./Components/Hallo";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import NameList from "./Components/NameList";



class App extends Component {
  render () {
    return (
      <div className="App">

        <NameList />

        {/* Comments :This Props Concept */}
        {/* <ParentComponent /> */}

        {/* <EventBind /> */}

        {/* <FunctionClick />
           <ClassClick /> */}

        {/* <Counter /> */}

        {/* <Message/> */}


           {/* //props */}
        {/* <Great name="Theepan">
          <p>This children Page</p>
        </Great>
        <Great />
        <button>Action</button>

        <Welcome  name="Gowthamy" />
        <Welcome name="Vasanth" />
        <Welcome name ="Santhan" /> */}

        {/* <Welcome />
        <Hallo /> */}
      </div>
    )
  }
}

export default App;
