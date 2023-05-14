import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Counter/Reducers/CounterReducer'


const store = configureStore ({
    reducer: {
      counterReducer
    }
})


export default store