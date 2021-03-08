import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import { firebaseAuth } from './config';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();
    

    // componentDidMount() {
    //     firebaseAuth.onAuthStateChanged(user => 
    //     //   {
    //     //   this.props.navigation.navigate(user ? 'FirstPage' : 'Main')
    
    //     // }
    //     setTimeout(()=>
    //         {
    //         this.props.navigation.navigate(user ? 'FirstPage' : 'Main');
    //       },1000)
        
    //     )
    //   }


        // firebaseAuth.onAuthStateChanged(user => 
        //     setTimeout(()=>
        //   {
        //   navigation.navigate(user ? 'FirstPage' : 'Login')
        // },1000)
        
        // )
      
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#FF6347' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../Images/Rassoi4.png')}
            style={styles.logo}
            resizeMode="stretch"/>
        </View>

        <Animatable.View style={[styles.footer, { backgroundColor: colors.background}]}
        animation="fadeInUpBig">

            <Text style={[styles.title, { color: colors.text }]}>Home Made Tasty Food !</Text>
            <Text style={styles.text}>Get it here only </Text>
            <View style={styles.button}>

            <Text></Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login_with_number")}>

                <LinearGradient
                    colors={['#FF6347', '#FF6347']}
                    style={styles.signIn}>
                    <Text style={styles.textSign}>Continue with Number</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
                </TouchableOpacity>

                <Text></Text>

                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <LinearGradient
                    colors={['#FF6347', '#FF6347']}
                    style={styles.signIn}>
                    <Text style={styles.textSign}>Continue with E-mail</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
                </TouchableOpacity>

            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FF6347'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 25,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30,
      alignItems: 'center',
  },
  signIn: {
      width: 250,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});

