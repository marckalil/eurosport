/**
 * @format
 * @flow
 */

import * as React from 'react';
import {Fragment} from 'react';
import {SafeAreaView} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './src/store/reducer';
import rootSaga from './src/store/sagas';
import {StatusBar} from './src/components';

import Home from './src/screens/Home/Home';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar />
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </Fragment>
    </Provider>
  );
};

export default App;
