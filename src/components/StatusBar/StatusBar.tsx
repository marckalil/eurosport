import * as React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Colors} from '../../utils/Contants';

const STATUSBAR_COLOR = Colors.blue;
const CustomStatusBar = () => {
  const [statusBarHeight, setStatusBarHeight] = React.useState(0);
  React.useEffect(() => {
    if (Platform.OS === 'ios') {
      // iPhones X, XS, XR, ...
      DeviceInfo.getModel().then(device => {
        if (device.includes('X')) setStatusBarHeight(44);
        // Other iPhones
        else setStatusBarHeight(20);
      });
    }
  }, []);

  if (Platform.OS === 'ios')
    return (
      <View style={{backgroundColor: STATUSBAR_COLOR, height: statusBarHeight}}>
        <StatusBar backgroundColor={STATUSBAR_COLOR} barStyle="light-content" />
      </View>
    );

  return (
    <StatusBar backgroundColor={STATUSBAR_COLOR} barStyle="light-content" />
  );
};

export default CustomStatusBar;
