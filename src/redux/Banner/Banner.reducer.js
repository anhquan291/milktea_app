import {
  BANNER_REQUEST,
  BANNER_REQUEST_FAIL,
  GET_BANNER_SUCCESS,
} from './Banner.actions';

const initialState = {
  banners: [],
  isLoading: false,
};

const BannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BANNER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BANNER_SUCCESS:
      return {
        ...state,
        banners: action.banners,
        isLoading: false,
      };
    case BANNER_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default BannerReducer;
