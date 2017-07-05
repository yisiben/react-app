import * as actionTypes from '../constants'

const userinfo = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}

export default userinfo
