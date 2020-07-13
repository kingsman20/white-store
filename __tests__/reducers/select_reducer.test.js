import authReducer from "../../src/redux/reducers/authReducer";

import { LOGIN_USER_SUCCESS } from "../../src/redux/actions/authAction";

describe("INITIAL_STATE", () => {
  test("is correct", () => {
    const action = { type: "dummy_action" };
    const initialState = {
        user: {},
        errors: {}
    }

    expect(authReducer(undefined, action)).toEqual(initialState);
  });
});

describe('Login', () => {
    test('login a user successfully', () => {
      const action = { type: LOGIN_USER_SUCCESS, payload: {id: 1, user: "Kingsley"} };
      const expectedState = {user: {id: 1, user: "Kingsley"}, errors: {}};
  
      expect(authReducer(undefined, action)).toEqual(expectedState);
    });
  });