import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Counter/Reducers/CounterReducer'
import themeReducer from '../Counter/Reducers/ThemeReducer'

const store = configureStore ({
    reducer: {
      counterReducer,
      themeReducer,
    }
})

export default store