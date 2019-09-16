import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import {IPlayersReducerState} from '../../store/reducer';
import {getPlayersList} from '../../store/actions';
import {Player} from '../../models/playersModels';
import {Header, PlayerItem} from '../../components';
import {Colors, DefaultMargin, FontSizes} from '../../utils/Contants';

const Home = () => {
  const [modalState, setModalState] = React.useState<IModaleState>({
    isModalVisible: false,
    selectedPlayer: null,
  });
  const {isModalVisible, selectedPlayer} = modalState;

  const {players, loading, error} = useSelector(
    (state: IPlayersReducerState) => state
  );
  const dispatch = useDispatch();
  const getPlayers = () => {
    dispatch(getPlayersList());
  };
  React.useEffect(() => {
    getPlayers();
  }, []);

  function toggleModal(player?: Player) {
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
    return (
      <React.Fragment>
        <Header />
        <Text style={styles.title}>TENNIS PLAYER</Text>
      </React.Fragment>
    );
  }

  function renderLoader() {
    return (
      <View style={styles.loadingErrorContainer}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    );
  }

  function renderError() {
    return (
      <View style={styles.loadingErrorContainer}>
        <TouchableOpacity onPress={getPlayers}>
          <Text style={styles.errorMessage1}>Something wrong happened</Text>
          <Text style={styles.errorMessage2}>Press to try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderList() {
    return (
      <FlatList
        style={styles.listContainer}
        data={players}
        renderItem={({item}) => (
          <PlayerItem player={item} toggleModal={() => toggleModal(item)} />
        )}
        keyExtractor={item => item.shortname}
      />
    );
  }

  function renderContent() {
    if (loading) return renderLoader();
    if (error) return renderError();
    return renderList();
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        {renderHeader()}
        {renderContent()}
        <PlayerDetails
          isModalVisible={isModalVisible}
          selectedPlayer={selectedPlayer}
          closeModal={toggleModal}
        />
      </View>
    </React.Fragment>
  );
};

type IModaleState = {
  isModalVisible: boolean;
  selectedPlayer: Player | null;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  listContainer: {
    display: 'flex',
    flexGrow: 1,
    paddingHorizontal: DefaultMargin,
  },
  title: {
    color: Colors.darkGrey,
    fontSize: FontSizes.L,
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
    color: Colors.darkGrey,
    fontSize: FontSizes.L,
    fontWeight: '600',
    textAlign: 'center',
  },
  errorMessage2: {
    color: Colors.darkGrey,
    fontSize: FontSizes.M,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default Home;
