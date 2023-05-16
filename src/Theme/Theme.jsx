import React, { useState } from 'react'
import * as actionCreators from '../actions/actionCreators'
import { connect } from 'react-redux'
import CONSTS from './constats.js'
import themeReducer from '../Counter/Reducers/ThemeReducer'


const styleThemes = {
    [CONSTS.THEME.LIGHT]: {backgroundColor: 'white', color: 'black'},
    [CONSTS.THEME.DARK]: {backgroundColor: 'black', color: 'white'}
};


const Theme = (props) => {
    const {theme, setTheme} = props;
      return (
    <div style = {styleThemes[theme]}> 
    <button onClick={setTheme}> 
        Change theme
    </button>
    </div>
  )
}

const mapActions = (dispatch) => {
    return{
        setTheme: () => dispatch(actionCreators.setTheme())
    }
}

const mapStates = (state) => state.themeReducer;


export default connect (mapStates, mapActions) (Theme)