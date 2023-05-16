
import CONSTS from '../Theme/constats';
import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice ({
    name: 'themeSlice',
    initialState: {theme : CONSTS.THEME.LIGHT},
    reducers: {
        setTheme (state,actions) {
        state.theme == CONSTS.THEME.LIGHT ? CONSTS.THEME.DARK : CONSTS.THEME.LIGHT
        }
    }
})

const {reducer, actions} = themeSlice;
export const {setTheme} = actions;
export default reducer;

