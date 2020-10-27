import {FIRST_OPEN_APP} from './FirstOpen.actions';

const initialState = {
  firstOpenApp: false,
};

const FirstOpenReducer = (state = initialState, action) => {
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

export default FirstOpenReducer;
