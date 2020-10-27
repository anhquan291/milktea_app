import {GET_PRODUCT_SUCCESS} from './productActions';

const initialState = {
  products: [],
  isLoading: false,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ProductReducer;
