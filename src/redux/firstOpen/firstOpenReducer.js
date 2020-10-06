import {FIRST_OPEN_APP} from './firstOpenActions';

const initialState = {
  firstOpenApp: false,
};

const firstOpenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_OPEN_APP:
      return {
        ...state,
        firstOpenApp: true,
      };
    default:
      return state;
  }
};

export default firstOpenReducer;
