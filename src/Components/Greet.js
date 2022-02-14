import React from "react";

//Fuctional Component
const Great = (props) => {
    console.log(props)
    return ( 
    <>
        <h1>This Testing Page {props.name}</h1>
        {props.children}
    </>
    )
}
// function Great () {
//     return (
//         <>
//             <h1>This page to testing</h1>
//         </>
//     )
// }

export default Great;