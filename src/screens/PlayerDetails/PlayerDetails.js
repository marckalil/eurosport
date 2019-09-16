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
var Trophy = require('../../../assets/trophy.png');
var PlayerDetails = function (_a) {
    var closeModal = _a.closeModal, isModalVisible = _a.isModalVisible, selectedPlayer = _a.selectedPlayer;
    var opacityAnim = React.useState(new react_native_1.Animated.Value(0))[0];
    React.useEffect(function () {
        react_native_1.Animated.timing(opacityAnim, {
            toValue: isModalVisible ? 0.3 : 0,
            duration: 500,
        }).start();
    }, [isModalVisible]);
    var handleOnPress = function () {
        closeModal();
    };
    function renderTouchableZone() {
        return (<react_native_1.View style={styles.touchableContainer}>
        <react_native_1.TouchableOpacity onPress={handleOnPress}>
          <react_native_1.View style={styles.touchableZone}>
            <react_native_1.View style={styles.modalBar}/>
          </react_native_1.View>
        </react_native_1.TouchableOpacity>
      </react_native_1.View>);
    }
    function renderModalHeader() {
        return (selectedPlayer && (<react_native_1.View style={styles.modalHeader}>
          <react_native_1.Image source={{ uri: selectedPlayer.getPictureUrl() }} style={styles.picture} resizeMode="cover"/>
          <react_native_1.View style={styles.playerIdContainer}>
            <react_native_1.Text style={styles.playerName}>
              {selectedPlayer.getFullName().toUpperCase()}
            </react_native_1.Text>
            <react_native_1.View style={styles.playerIdDetailsContainer}>
              <react_native_1.Image source={{ uri: selectedPlayer.getCountryUrl() }} style={styles.flag} resizeMode="contain"/>
              <react_native_1.Text style={styles.playerIdDetails}>
                {selectedPlayer.data.age} yo
              </react_native_1.Text>
              <react_native_1.Text style={styles.playerIdDetails}>
                {selectedPlayer.data.height} cm
              </react_native_1.Text>
              <react_native_1.Text style={styles.playerIdDetails}>
                {selectedPlayer.data.weight} kg
              </react_native_1.Text>
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.View>));
    }
    function renderData(scoreProperty, scoreValue, isOnRightSide) {
        if (isOnRightSide === void 0) { isOnRightSide = false; }
        return (<react_native_1.View style={[
            styles.scoreContainer,
            isOnRightSide ? styles.scoreRightSide : {},
        ]}>
        <react_native_1.Text style={styles.scoreProperty}>{scoreProperty}: </react_native_1.Text>
        <react_native_1.Text style={styles.scoreValue}>{scoreValue}</react_native_1.Text>
      </react_native_1.View>);
    }
    function renderPlayerData() {
        return (selectedPlayer && (<React.Fragment>
          <react_native_1.View style={styles.trophy}>
            <react_native_1.Image source={Trophy}/>
          </react_native_1.View>
          <react_native_1.View style={styles.scoreMainContainer}>
            <react_native_1.View>
              {renderData('Rank', selectedPlayer.data.rank)}
              {renderData('Points', selectedPlayer.data.points)}
            </react_native_1.View>
            <react_native_1.View>
              {renderData('Wins', selectedPlayer.getWinsLosses().wins, true)}
              {renderData('Losses', selectedPlayer.getWinsLosses().losses, true)}
            </react_native_1.View>
          </react_native_1.View>
        </React.Fragment>));
    }
    function renderModalContent() {
        return (<react_native_1.View style={styles.modalContainer}>
        {renderModalHeader()}
        {renderPlayerData()}
      </react_native_1.View>);
    }
    function renderModal() {
        return (<react_native_1.Modal animationType="slide" transparent visible={isModalVisible}>
        {renderTouchableZone()}
        {renderModalContent()}
      </react_native_1.Modal>);
    }
    if (!isModalVisible || !selectedPlayer)
        return null;
    return (<React.Fragment>
      <react_native_1.Animated.View style={[styles.backgroundLayer, { opacity: opacityAnim }]}/>
      {renderModal()}
    </React.Fragment>);
};
var styles = react_native_1.StyleSheet.create({
    backgroundLayer: {
        backgroundColor: Contants_1.Colors.black,
        width: react_native_1.Dimensions.get('screen').width,
        height: react_native_1.Dimensions.get('screen').height,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    touchableContainer: {
        height: '20%',
        width: '100%',
    },
    touchableZone: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingBottom: 20,
    },
    modalBar: {
        backgroundColor: Contants_1.Colors.lightGrey,
        width: 100,
        height: 6,
        borderRadius: 3,
    },
    modalContainer: {
        backgroundColor: Contants_1.Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '80%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    modalHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        borderBottomColor: Contants_1.Colors.lightGrey,
        borderBottomWidth: 1,
    },
    picture: {
        width: 90,
        borderTopLeftRadius: 30,
    },
    playerIdContainer: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 10,
        paddingRight: Contants_1.DefaultMargin,
        justifyContent: 'space-between',
    },
    playerIdDetailsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    playerName: {
        fontSize: Contants_1.FontSizes.L,
        fontWeight: '600',
        color: Contants_1.Colors.darkGrey,
    },
    playerIdDetails: {
        color: Contants_1.Colors.darkGrey,
        fontSize: Contants_1.FontSizes.M,
        fontWeight: '400',
        textDecorationLine: 'underline',
        marginLeft: 10,
    },
    flag: {
        height: 30,
        width: 46,
    },
    trophy: {
        display: 'flex',
        height: 50,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    scoreMainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Contants_1.DefaultMargin,
    },
    scoreContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    scoreProperty: {
        fontSize: Contants_1.FontSizes.L,
        fontWeight: '600',
        color: Contants_1.Colors.darkGrey,
    },
    scoreValue: {
        fontSize: Contants_1.FontSizes.L,
        fontWeight: '400',
        color: Contants_1.Colors.darkGrey,
    },
    scoreRightSide: {
        justifyContent: 'flex-end',
    },
});
exports.default = PlayerDetails;
