"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var Contants_1 = require("../../utils/Contants");
var Logo = require('../../../assets/eurosport_logo.png');
var Header = function () {
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Image source={Logo}/>
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: Contants_1.Colors.blue,
        display: 'flex',
        height: 55,
        alignItems: 'center',
        paddingVertical: 15,
    },
});
exports.default = Header;
