"use strict";
/**
 * @format
 * @flow
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var react_native_1 = require("react-native");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var redux_saga_1 = __importDefault(require("redux-saga"));
var reducer_1 = __importDefault(require("./src/store/reducer"));
var sagas_1 = __importDefault(require("./src/store/sagas"));
var components_1 = require("./src/components");
var Home_1 = __importDefault(require("./src/screens/Home/Home"));
var sagaMiddleware = redux_saga_1.default();
var store = redux_1.createStore(reducer_1.default, redux_1.applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas_1.default);
var App = function () {
    return (<react_redux_1.Provider store={store}>
      <react_1.Fragment>
        <components_1.StatusBar />
        <react_native_1.SafeAreaView>
          <Home_1.default />
        </react_native_1.SafeAreaView>
      </react_1.Fragment>
    </react_redux_1.Provider>);
};
exports.default = App;
