import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Player} from '../../models/playersModels';
import {Colors, DefaultMargin, FontSizes} from '../../utils/Contants';
const Trophy = require('../../../assets/trophy.png');

const PlayerDetails = ({
  closeModal,
  isModalVisible,
  selectedPlayer,
}: IProps) => {
  const [opacityAnim] = React.useState<Animated.Value>(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: isModalVisible ? 0.3 : 0,
      duration: 500,
    }).start();
  }, [isModalVisible]);

  const handleOnPress = () => {
    closeModal();
  };

  function renderTouchableZone() {
    return (
      <View style={styles.touchableContainer}>
        <TouchableOpacity onPress={handleOnPress}>
          <View style={styles.touchableZone}>
            <View style={styles.modalBar} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderModalHeader() {
    return (
      selectedPlayer && (
        <View style={styles.modalHeader}>
          <Image
            source={{uri: selectedPlayer.getPictureUrl()}}
            style={styles.picture}
            resizeMode="cover"
          />
          <View style={styles.playerIdContainer}>
            <Text style={styles.playerName}>
              {selectedPlayer.getFullName().toUpperCase()}
            </Text>
            <View style={styles.playerIdDetailsContainer}>
              <Image
                source={{uri: selectedPlayer.getCountryUrl()}}
                style={styles.flag}
                resizeMode="contain"
              />
              <Text style={styles.playerIdDetails}>
                {selectedPlayer.data.age} yo
              </Text>
              <Text style={styles.playerIdDetails}>
                {selectedPlayer.data.height} cm
              </Text>
              <Text style={styles.playerIdDetails}>
                {selectedPlayer.data.weight} kg
              </Text>
            </View>
          </View>
        </View>
      )
    );
  }

  function renderData(
    scoreProperty: string,
    scoreValue: string | number,
    isOnRightSide: boolean = false
  ) {
    return (
      <View
        style={[
          styles.scoreContainer,
          isOnRightSide ? styles.scoreRightSide : {},
        ]}>
        <Text style={styles.scoreProperty}>{scoreProperty}: </Text>
        <Text style={styles.scoreValue}>{scoreValue}</Text>
      </View>
    );
  }

  function renderPlayerData() {
    return (
      selectedPlayer && (
        <React.Fragment>
          <View style={styles.trophy}>
            <Image source={Trophy} />
          </View>
          <View style={styles.scoreMainContainer}>
            <View>
              {renderData('Rank', selectedPlayer.data.rank)}
              {renderData('Points', selectedPlayer.data.points)}
            </View>
            <View>
              {renderData('Wins', selectedPlayer.getWinsLosses().wins, true)}
              {renderData(
                'Losses',
                selectedPlayer.getWinsLosses().losses,
                true
              )}
            </View>
          </View>
        </React.Fragment>
      )
    );
  }

  function renderModalContent() {
    return (
      <View style={styles.modalContainer}>
        {renderModalHeader()}
        {renderPlayerData()}
      </View>
    );
  }

  function renderModal() {
    return (
      <Modal animationType="slide" transparent visible={isModalVisible}>
        {renderTouchableZone()}
        {renderModalContent()}
      </Modal>
    );
  }

  if (!isModalVisible || !selectedPlayer) return null;
  return (
    <React.Fragment>
      <Animated.View style={[styles.backgroundLayer, {opacity: opacityAnim}]} />
      {renderModal()}
    </React.Fragment>
  );
};

type IProps = {
  closeModal: () => void;
  isModalVisible: boolean;
  selectedPlayer: Player | null;
};

const styles = StyleSheet.create({
  backgroundLayer: {
    backgroundColor: Colors.black,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
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
    backgroundColor: Colors.lightGrey,
    width: 100,
    height: 6,
    borderRadius: 3,
  },
  modalContainer: {
    backgroundColor: Colors.white,
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
    borderBottomColor: Colors.lightGrey,
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
    paddingRight: DefaultMargin,
    justifyContent: 'space-between',
  },
  playerIdDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerName: {
    fontSize: FontSizes.L,
    fontWeight: '600',
    color: Colors.darkGrey,
  },
  playerIdDetails: {
    color: Colors.darkGrey,
    fontSize: FontSizes.M,
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
    paddingHorizontal: DefaultMargin,
  },
  scoreContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  scoreProperty: {
    fontSize: FontSizes.L,
    fontWeight: '600',
    color: Colors.darkGrey,
  },
  scoreValue: {
    fontSize: FontSizes.L,
    fontWeight: '400',
    color: Colors.darkGrey,
  },
  scoreRightSide: {
    justifyContent: 'flex-end',
  },
});
export default PlayerDetails;
