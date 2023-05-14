import {configureStore} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}
const counterReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'INC': return {value: state.value+1};
        case 'DEC': return {value: state.value-1};
        default: return state;
    }
}

const store = configureStore ({
    reducer: {
      counterReducer
    }
})


export default store