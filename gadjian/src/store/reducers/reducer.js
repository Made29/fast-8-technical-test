import { FETCH_USERS } from "../actions/actinoType";

const initialState = {
    users: [],
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
}

export default dataReducer;
