export const FIRST_OPEN_APP = 'FIRST_OPEN_APP';

export const firstOpenApp = () => {
  return (dispatch) => {
    dispatch({
      type: FIRST_OPEN_APP,
    });
  };
};
