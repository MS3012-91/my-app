
import ACTION_TYPES from '../../actions/actionTypes';

let i = 1000;
const db = [
    {id: i++, name:'Tom', surname: 'Smith'},
    {id: i++, name: 'Jane', surname: 'Adson'},
    {id: i++, name: 'Ann', surname: 'Tomson'},
    {id: i++, name: 'John', surname: 'Tomson'},
    {id: i++, name: 'Nike', surname: 'Brother'},
];


const initialState = {
    users: db,
    currentUser: {},
    error: null,
    isLoading: false,
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.CREATE_USER: {
            const newUser = {...action.data, id: i++};
            const updDB = [...state.users, newUser];
            return {users: updDB};
            
        };
        case ACTION_TYPES.READ_USER: {
            const findUserIndex = state.users.findIndex( u => action.data.id == u.id);
            return {currentUser: state.users[findUserIndex]};
        };
        case ACTION_TYPES.UPDATE_USER: {
            const updDB = [...state.users];
            const findUserIndex = state.users.findIndex( u => action.data.id == u.id);
            updDB[findUserIndex] = {...updDB[findUserIndex], ...action.data};
            return {users: updDB};
        };
        case ACTION_TYPES.DELETE_USER: {
            const updDB = [...state.users];
            updDB.splice(updDB.findIndex(u => action.id == u.id),1);
            return {users: updDB};
        };
        default: return state;
    }
    
};

export default userReducer;