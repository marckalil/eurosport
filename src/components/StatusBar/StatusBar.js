"use strict";
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
var react_native_1 = require("react-native");
var react_native_device_info_1 = __importDefault(require("react-native-device-info"));
var Contants_1 = require("../../utils/Contants");
var STATUSBAR_COLOR = Contants_1.Colors.blue;
var CustomStatusBar = function () {
    var _a = React.useState(0), statusBarHeight = _a[0], setStatusBarHeight = _a[1];
    React.useEffect(function () {
        if (react_native_1.Platform.OS === 'ios') {
            // iPhones X, XS, XR, ...
            react_native_device_info_1.default.getModel().then(function (device) {
                if (device.includes('X'))
                    setStatusBarHeight(44);
                // Other iPhones
                else
                    setStatusBarHeight(20);
            });
        }
    }, []);
    if (react_native_1.Platform.OS === 'ios')
        return (<react_native_1.View style={{ backgroundColor: STATUSBAR_COLOR, height: statusBarHeight }}>
        <react_native_1.StatusBar backgroundColor={STATUSBAR_COLOR} barStyle="light-content"/>
      </react_native_1.View>);
    return (<react_native_1.StatusBar backgroundColor={STATUSBAR_COLOR} barStyle="light-content"/>);
};
exports.default = CustomStatusBar;
