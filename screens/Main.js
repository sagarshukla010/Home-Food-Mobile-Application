
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
var bg = require('../Images/Rassoi.png');
import { GoogleSignin, GoogleSigninButton,statusCodes  } from 'react-native-google-signin';

export default class Main extends Component {


  // componentDidMount() {

    
  //   GoogleSignin.configure({

  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: '523233320193-4ansuuru5nb5u0lotoi78ojikntstr5q.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     hostedDomain: '', // specifies a hosted domain restriction
  //     loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  //     forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  //     accountName: 'com.awesomeproject', // [Android] specifies an account name on the device that should be used
  //    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //   });
  //   getCurrentUserInfo = async () => {
  //     try {
  //       const userInfo = await GoogleSignin.signInSilently();
  //       this.setState({ userInfo });
  //     } catch (error) {
  //       if (error.code === statusCodes.SIGN_IN_REQUIRED) {
  //         // user has not signed in yet
  //       } else {
  //         // some other error
  //       }
  //     }
  //   };
  // }

  
  // getCurrentUser = async () => {
  //   const currentUser = await GoogleSignin.getCurrentUser();
  //   this.setState({ currentUser });
  // };
  

  // _signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //     const userInfo = await GoogleSignin.signIn();
  //     this.setState({ userInfo });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //       console.error('play services are not available');
  //     }
  //   }
  // };

  

  // isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   this.setState({ isLoginScreenPresented: !isSignedIn });
  // };

  // getCurrentUser = async () => {
  //   const currentUser = await GoogleSignin.getCurrentUser();
  //   this.setState({ currentUser });
  // };

  // signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     this.setState({ user: null }); // Remember to remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  // revokeAccess = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     console.log('deleted');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

 
    
    render(){
    return (
    <>
      <StatusBar barStyle="dark-content"  backgroundColor = "#FFF" />

            <View style={styles.SkipContainer}>
            <TouchableOpacity 
            style={styles.SkipBtn} 
            onPress={()=>this.props.navigation.navigate("FirstPage")}>
            <Text style={styles.btnTxt}>Skip</Text>
            </TouchableOpacity>
            </View>

        <View style={styles.container}>
        <StatusBar hidden = {false} backgroundColor="#FFF" barStyle="light-content" />

        <Text></Text>

           

      <Image source={bg}/>
      <Text></Text>
      <Text style={styles.btnTxt}>Rassoi Home Food</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
     
            <View style={styles.btnContainer}>
            
            <TouchableOpacity 
            style={styles.userBtn} 
            onPress={this.handleSignUp}>
            <Text style={styles.btnTxt}>Continue with Facebook</Text>
            </TouchableOpacity>
            </View>

            <Text></Text>
            <GoogleSigninButton
            style={{ width: 320, height: 60,borderRadius: 30}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            // onPress={this._signIn}
            // disabled={this.state.isSigninInProgress}
           // onPress={this._signIn.bind(this)}
            />

            <Text></Text>
            <View style={styles.btnContainer}>
            <TouchableOpacity 
            style={styles.userBtn} 
            onPress={()=>this.props.navigation.navigate("Login")}>
            <Text style={styles.btnTxt}>Login with Email</Text>
            </TouchableOpacity>
            </View>

            </View>
    </>
  )}
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor : '#FFF'
  },
  welcome:{
    fontSize:15,
    textAlign:'center',
    margin:10
  },
  instruction:{
    textAlign:'center',
    color: '#333333',
    marginBottom:5,
    fontSize:20
  },
  input:{
    width:"90%",
    backgroundColor:"#fff",
    padding:15,
    marginBottom:10
  },
  btnContainer:{
    flexDirection:"row",
    justifyContent:"center",
    width:"90%"
  },
  SkipContainer:{
    flexDirection:"row",
    justifyContent:"flex-end",
    backgroundColor : '#FFF'
  },
  userBtn:{
    backgroundColor:"#f5f5f5",
    padding:15,
    width:"90%"
  },
  SkipBtn:{
    backgroundColor:"#f5f5f5",
    padding:10,
    width:"30%",
    borderRadius: 30,
  },
  btnTxt:{
    fontSize:18,
    textAlign:"center"
  }, 
  LoginText:{
    fontSize:15,
    textAlign:"center",
    color: "#F44336"
  }
  });
