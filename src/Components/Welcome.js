import React ,{Component} from "react";

//Class Component
class Welcome extends Component {
    render () {
        return (
            //When the class component  this 
            <>
                <h3>This Come From Welcome Component {this.props.name}</h3>
            </>
        )
    }
}

export default Welcome;