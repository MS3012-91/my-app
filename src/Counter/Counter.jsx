import React from 'react'
import {connect} from 'react-redux'

 function Counter(props) {
  const {value, inc, dec} = props
    return (
    <div>
        <p>Total: {value} </p>
        
        <button onClick = {inc}>
            +
        </button>
        <button onClick = {dec}>
            -
        </button>
    </div>
  )
 }

const mapActions = (dispatch) => {
    return{
        inc: () => dispatch ({type: 'INC'}),
        dec: () => dispatch ({type:'DEC'})
    }
}

const mapStates = (state) => {
    return {value: state.counterReducer.value}};

export default connect(mapStates,mapActions) (Counter)