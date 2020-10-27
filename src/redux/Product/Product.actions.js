export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCT_REQUEST_FAIL = 'PRODUCT_REQUEST_FAIL';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';

export const getProduct = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCT_SUCCESS,
    });
  };
};
