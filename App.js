import React from 'react';
// import {View} from 'react-native';
//Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import AppNavigation from './src/navigation';
import {userReducer, firstOpenReducer} from './src/redux';

const rootReducer = combineReducers({
  user: userReducer,
  firstOpenApp: firstOpenReducer,
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
