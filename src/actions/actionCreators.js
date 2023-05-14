import ACTION_TYPES from "./actionTypes"


export const inc=  () =>  ({type: ACTION_TYPES.INC})
export const dec = () =>  ({type: ACTION_TYPES.DEC})
export const setStep = (newValue) => ({type: ACTION_TYPES.SET_STEP,
value: newValue,
})