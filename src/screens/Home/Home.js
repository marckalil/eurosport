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
var react_redux_1 = require("react-redux");
var PlayerDetails_1 = __importDefault(require("../PlayerDetails/PlayerDetails"));
var actions_1 = require("../../store/actions");
var components_1 = require("../../components");
var Contants_1 = require("../../utils/Contants");
var Home = function () {
    var _a = React.useState({
        isModalVisible: false,
        selectedPlayer: null,
    }), modalState = _a[0], setModalState = _a[1];
    var isModalVisible = modalState.isModalVisible, selectedPlayer = modalState.selectedPlayer;
    var _b = react_redux_1.useSelector(function (state) { return state; }), players = _b.players, loading = _b.loading, error = _b.error;
    var dispatch = react_redux_1.useDispatch();
    var getPlayers = function () {
        dispatch(actions_1.getPlayersList());
    };
    React.useEffect(function () {
        getPlayers();
    }, []);
    function toggleModal(player) {
        if (!isModalVisible && player)
            setModalState({
                isModalVisible: true,
                selectedPlayer: player,
            });
        else
            setModalState({
                isModalVisible: false,
                selectedPlayer: null,
            });
    }
    function renderHeader() {
        return (<React.Fragment>
        <components_1.Header />
        <react_native_1.Text style={styles.title}>TENNIS PLAYER</react_native_1.Text>
      </React.Fragment>);
    }
    function renderLoader() {
        return (<react_native_1.View style={styles.loadingErrorContainer}>
        <react_native_1.ActivityIndicator size="large" color={Contants_1.Colors.blue}/>
      </react_native_1.View>);
    }
    function renderError() {
        return (<react_native_1.View style={styles.loadingErrorContainer}>
        <react_native_1.TouchableOpacity onPress={getPlayers}>
          <react_native_1.Text style={styles.errorMessage1}>Something wrong happened</react_native_1.Text>
          <react_native_1.Text style={styles.errorMessage2}>Press to try again</react_native_1.Text>
        </react_native_1.TouchableOpacity>
      </react_native_1.View>);
    }
    function renderList() {
        return (<react_native_1.FlatList style={styles.listContainer} data={players} renderItem={function (_a) {
            var item = _a.item;
            return (<components_1.PlayerItem player={item} toggleModal={function () { return toggleModal(item); }}/>);
        }} keyExtractor={function (item) { return item.shortname; }}/>);
    }
    function renderContent() {
        if (loading)
            return renderLoader();
        if (error)
            return renderError();
        return renderList();
    }
    return (<React.Fragment>
      <react_native_1.View style={styles.container}>
        {renderHeader()}
        {renderContent()}
        <PlayerDetails_1.default isModalVisible={isModalVisible} selectedPlayer={selectedPlayer} closeModal={toggleModal}/>
      </react_native_1.View>
    </React.Fragment>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    listContainer: {
        display: 'flex',
        flexGrow: 1,
        paddingHorizontal: Contants_1.DefaultMargin,
    },
    title: {
        color: Contants_1.Colors.darkGrey,
        fontSize: Contants_1.FontSizes.L,
        fontWeight: '600',
        textAlign: 'center',
        paddingVertical: 20,
    },
    loadingErrorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage1: {
        color: Contants_1.Colors.darkGrey,
        fontSize: Contants_1.FontSizes.L,
        fontWeight: '600',
        textAlign: 'center',
    },
    errorMessage2: {
        color: Contants_1.Colors.darkGrey,
        fontSize: Contants_1.FontSizes.M,
        fontWeight: '400',
        textAlign: 'center',
        paddingTop: 10,
    },
});
exports.default = Home;
