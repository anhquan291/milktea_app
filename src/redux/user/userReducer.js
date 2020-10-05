import {USER_REQUEST} from './userActions';

const initialState = {
  user: {},
  notification: {},
  isLoading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
