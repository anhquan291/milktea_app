import React from 'react';
// import {View} from 'react-native';
//Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import AppNavigation from './src/navigation';
import {
  UserReducer,
  FirstOpenReducer,
  OtpReducer,
  WithoutUserReducer,
  BannerReducer,
} from './src/redux';

const rootReducer = combineReducers({
  user: UserReducer,
  firstOpenApp: FirstOpenReducer,
  otp: OtpReducer,
  withoutUser: WithoutUserReducer,
  banners: BannerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
