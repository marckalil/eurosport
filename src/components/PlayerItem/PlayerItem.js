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
var PlayerItem = function (_a) {
    var toggleModal = _a.toggleModal, player = _a.player;
    function handleOnPressPlayer() {
        toggleModal(player);
    }
    return (<react_native_1.TouchableOpacity onPress={handleOnPressPlayer}>
      <react_native_1.View style={styles.container}>
        <react_native_1.Text style={styles.rank}>{player.data.rank}</react_native_1.Text>
        <react_native_1.View style={styles.pictureContainer}>
          <react_native_1.Image source={{ uri: player.getPictureUrl() }} style={styles.picture} resizeMode="cover"/>
          <react_native_1.Image source={{ uri: player.getCountryUrl() }} style={styles.flag} resizeMode="contain"/>
        </react_native_1.View>
        <react_native_1.View style={styles.dataContainer}>
          <react_native_1.Text style={styles.data}>{player.getFullName()}</react_native_1.Text>
          <react_native_1.Text style={styles.data}>{player.data.points} pts</react_native_1.Text>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.TouchableOpacity>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopColor: Contants_1.Colors.lightGrey,
        borderTopWidth: 1,
    },
    dataContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
    },
    data: {
        fontSize: Contants_1.FontSizes.M,
        fontWeight: '400',
    },
    flag: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: 14,
        width: 20,
    },
    pictureContainer: {
        marginLeft: 10,
        position: 'relative',
        width: 60,
        height: 60,
    },
    picture: {
        flex: 1,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Contants_1.Colors.blue,
    },
    rank: {
        width: 35,
        fontSize: Contants_1.FontSizes.L,
        fontWeight: '600',
    },
});
exports.default = PlayerItem;
