import { FETCH_USERS } from "./actinoType";

export const fetchUsers = (payload) => {
    return {
        type: FETCH_USERS,
        payload,
    };
};

export const fetchAllUser = () => {
    console.log('masuk')
    return (dispatch) => {
        fetch("https://randomuser.me/api/?results=28")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => dispatch(fetchUsers(data)))
            .catch((error) => {
                console.log(error);
            });
    };
};
