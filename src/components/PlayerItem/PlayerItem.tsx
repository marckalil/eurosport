import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Player} from '../../models/playersModels';
import {Colors, FontSizes} from '../../utils/Contants';

const PlayerItem = ({toggleModal, player}: IProps) => {
  function handleOnPressPlayer() {
    toggleModal(player);
  }
  return (
    <TouchableOpacity onPress={handleOnPressPlayer}>
      <View style={styles.container}>
        <Text style={styles.rank}>{player.data.rank}</Text>
        <View style={styles.pictureContainer}>
          <Image
            source={{uri: player.getPictureUrl()}}
            style={styles.picture}
            resizeMode="cover"
          />
          <Image
            source={{uri: player.getCountryUrl()}}
            style={styles.flag}
            resizeMode="contain"
          />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.data}>{player.getFullName()}</Text>
          <Text style={styles.data}>{player.data.points} pts</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

type IProps = {
  player: Player;
  toggleModal: (player: Player) => void;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopColor: Colors.lightGrey,
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
    fontSize: FontSizes.M,
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
    borderColor: Colors.blue,
  },
  rank: {
    width: 35,
    fontSize: FontSizes.L,
    fontWeight: '600',
  },
});
export default PlayerItem;
