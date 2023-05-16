
import ACTION_TYPES from "../../actions/actionTypes";
import CONSTS from '../../Theme/constats';

const startTheme = {
    theme : CONSTS.THEME.LIGHT
}

const themeReducer = (state = startTheme, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_THEME : return {
            ...state,
        theme: state.theme == CONSTS.THEME.LIGHT ? CONSTS.THEME.DARK : CONSTS.THEME.LIGHT
        }
        default: return state;
    }
}

export default themeReducer