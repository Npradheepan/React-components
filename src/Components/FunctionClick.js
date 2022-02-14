import React from 'react'

function FunctionClick() {
    function clickHandler () {
        console.log('FunctionClicked');
    }
  return (
    <div>
        <button onClick={clickHandler}>FunctionClick</button>
    </div>
  )
}

export default FunctionClick