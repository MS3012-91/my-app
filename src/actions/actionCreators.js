import ACTION_TYPES from "./actionTypes"


export const inc=  () =>  ({type: ACTION_TYPES.INC})
export const dec = () =>  ({type: ACTION_TYPES.DEC})
export const setStep = (newValue) => ({type: ACTION_TYPES.SET_STEP,
value: newValue})
export const setTheme = (theme) => ({type:ACTION_TYPES.SET_THEME,
value:theme})

export const createUser = (data) => ({
    type: ACTION_TYPES.CREATE_USER,
    data:data
});

export const getUser = (id) => ({
    type: ACTION_TYPES.READ_USER,
    id:id
});

export const updateUser = (data) => ({
    type: ACTION_TYPES.UPDATE_USER,
    data:data
})

export const deleteUser = (id) => ({
    type: ACTION_TYPES.DELETE_USER,
    id:id
})

