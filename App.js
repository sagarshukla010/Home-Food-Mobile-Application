import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Splash from './screens/Splash';
import Main from './screens/Main';
import Login from './screens/Login';
import Signup from './screens/Signup';
import FirstPage from './screens/FirstPage';
import Login_with_number from './screens/Login_with_number';




const App=createStackNavigator({
  Splash:{screen:Splash},
  Main:{screen:Main},
  Login:{screen:Login},
  Signup:{screen:Signup},
  FirstPage:{screen:FirstPage},
  Login_with_number:{screen:Login_with_number}
},
{ headerMode: 'none' }
);

export default createAppContainer(App);