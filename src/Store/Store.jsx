import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Counter/Reducers/CounterReducer'
import themeReducer from '../Counter/Reducers/ThemeReducer'
// import userReducer from '../Counter/Reducers/UserReducer'
import userReducer from '../Slices/userSlicer'

const store = configureStore ({
    reducer: {
      counterReducer,
      themeReducer,
      userReducer
    }
})

export default store