import React from 'react'
import {connect} from 'react-redux'
import ACTION_TYPES from '../actions/actionTypes'
import * as actionCreators from '../actions/actionCreators'

 function Counter(props) {
  const {value, inc, dec, step, setStep} = props
    const stepHandler = (event) => {
         setStep (Number(event.target.value))
    }
    return (
    <div>
        <p>Total: {value} </p>
        <input type = 'number' value = {step} onChange={stepHandler}/>
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
        inc: () => dispatch (actionCreators.inc ()),
        dec: () => dispatch (actionCreators.dec ()),
        setStep: (newValue) => dispatch (actionCreators.setStep(newValue))
    }
}

const mapStates = (state) => {
    return {value: state.counterReducer.value}};

export default connect(mapStates,mapActions) (Counter)