import * as actionTypes from '../constants'

export const update = (data) => {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}
