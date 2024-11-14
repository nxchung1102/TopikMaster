/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-devsettings';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigation from './src/navigation/topikAppNavigation/StackMainNavigation';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <MainNavigation />
    </GestureHandlerRootView>
  );
}
export default App;
