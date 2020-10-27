import firestore from '@react-native-firebase/firestore';
export const BANNER_REQUEST = 'BANNER_REQUEST';
export const BANNER_REQUEST_FAIL = 'BANNER_REQUEST_FAIL';
export const GET_BANNER_SUCCESS = 'GET_BANNER_SUCCESS';

export const getBanner = () => {
  return async (dispatch) => {
    dispatch({
      type: BANNER_REQUEST,
    });
    try {
      const banners = await firestore().collection('banners').get();
      const homeContents = await firestore().collection('homeContents').get();
      // console.log(homeContents.docs[0].id);
      dispatch({
        type: GET_BANNER_SUCCESS,
        banners: banners.docs,
      });
    } catch (err) {
      dispatch({
        type: BANNER_REQUEST_FAIL,
      });
      throw err;
    }
  };
};
