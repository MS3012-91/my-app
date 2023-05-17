import {createSlice} from '@reduxjs/toolkit'
import ACTION_TYPES from '../actions/actionTypes';


let i = 1000;
const db = [
    {id: i++, name:'Tom', surname: 'Smith'},
    {id: i++, name: 'Jane', surname: 'Adson'},
    {id: i++, name: 'Ann', surname: 'Tomson'},
    {id: i++, name: 'John', surname: 'Tomson'},
    {id: i++, name: 'Nike', surname: 'Brother'},
];

const userSlice = createSlice ({
    name: 'userSlice',
    initialState: {
        users: db,
        currentUser: {},
        error: null,
        isLoading: false,},
    reducers: {
        CreateUser : (state, action) => {
            const newUser = {...action.payload, id: i++};
            const updDB = [...state.users, newUser];
            state.users = updDB;
       },
        GetUser : (state, action) =>{
            const findUserIndex = state.users.findIndex( u => action.payload.id == u.id);
            state.currentUser = state.users[findUserIndex]}
        ,
        UpdateUser: (state, action) =>{
            const updDB = [...state.users];
            const findUserIndex = state.users.findIndex( u => action.payload.id == u.id);
            updDB[findUserIndex] = {...updDB[findUserIndex], ...action.data};
            state.users = updDB
        },
        DeleteUser : (state, action) => {
            const updDB = [...state.users];
            updDB.splice(updDB.findIndex(u => action.payload == u.id),1);
            state.users= updDB;
    }
}
}
)

export const {CreateUser,GetUser, UpdateUser, DeleteUser} = userSlice.actions;

export default userSlice.reducer;

