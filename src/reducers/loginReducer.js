import {REGISTRO_SAVE_FORM} from  "../actions/types"

const initialState = {
    
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTRO_SAVE_FORM:
            return {
                ...state,
               
            };

      

        default:
            return state;
    }
}