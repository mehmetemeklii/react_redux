import * as actitonTpyes from "../Actions/actionTypes"

export const increaseCounter= () =>({
    type:actitonTpyes.INCREASE_COUNTER,
    payload:1

})

export const decreaseCounter= () =>({
    type:actitonTpyes.DECREASE_COUNTER,
    payload:1

})

export const increaseByTwoCounter= () =>({
    type:actitonTpyes.INCREASE_BY_TWO_COUNTER,
    payload:2

})
