import {CLOSE_SIDEBAR,OPEN_SIDEBAR }from '../utlis/actions'

export const reducer = (state, action) => {
    const {payload,type}=action
    switch (type) {
        case OPEN_SIDEBAR :
           return{...state,isClose:payload} 
 
        default:
          return state
    }
};
