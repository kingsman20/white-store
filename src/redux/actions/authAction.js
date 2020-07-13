export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

const BASE_URL = 'https://yaplyapi.herokuapp.com/api/v1';

// Action to login a user given the username and password
export const loginUser = (authData) => {
    const {username, password} = authData;

    return async dispatch => {

        // logic to make a post to LOGIN the user
        const result = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '829839283923'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        const resultData = await result.json();
        console.log(resultData);

        // Dispatch action to add the result of the request to state
        if(resultData.success) {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: resultData
            });
        } else {
            dispatch({
                type: LOGIN_USER_FAIL
            });
        }

        return resultData;

    }
}
