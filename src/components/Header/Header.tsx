import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors} from '../../utils/Contants';
const Logo = require('../../../assets/eurosport_logo.png');

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    display: 'flex',
    height: 55,
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default Header;
