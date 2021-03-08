import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

//import { AuthContext } from '../components/context';
import {  firebaseAuth } from './config';

//import Users from '../model/users';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        number : '',
        code : '',
        errorMessage:'',
        check_textInputChange: false,
        //secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();


  handleLogin = ( ) => {

    if ( data.number.length == 0 || data.code.length == 0 ) {
                Alert.alert('Wrong Input!', 'email or password field cannot be empty.', [
                    {text: 'Okay'}
                ]);
            }

    firebaseAuth.signInWithEmailAndPassword(data.email,data.password).then(() => navigation.navigate('Signup'))
  .catch(error => setData({ errorMessage: error.message }));
  }

    const textInputChange = (val) => {
        if( val.trim().length == 12) {
            setData({
               ...data,
                number : val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                number : val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length == 6 ) {
            setData({
                ...data,
                code : val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                code : val,
                isValidPassword: false
            });
        }
    }

    // const updateSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         secureTextEntry: !data.secureTextEntry
    //     });
    // }

    const handleValidUser = (val) => {
        if( val.trim().length == 12 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

   
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#FF6347' barStyle="light-content"/>
      <View style={styles.header}>
      <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}>

            {/* {data.errorMessage &&
            <Text style={{ color: 'red' }}>
            Please enter your credentials in correct format to login
            </Text>} */}

            <Text style={[styles.text_footer, { color: colors.text }]}>Mobile no</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}/>
                <TextInput 
                    placeholder="+91- your mobile number"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, { color: colors.text }]}
                    autoCapitalize="none"
                    keyboardType='phone-pad'
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}/>

                {data.check_textInputChange ? 
                <Animatable.View animation="bounceIn">
                <Feather 
                        name="check-circle"
                        color="green"
                        size={20}/>
                </Animatable.View>
                : null}
            </View>

            {  data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>please enter correct mobile number with country code</Text>
            </Animatable.View>
            } 
            
            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 35
            }]}>Code</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="6 digit code"
                    placeholderTextColor="#666666"
                   //secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                {/* <TouchableOpacity
                   onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity> */}
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Code must be 6-digit long</Text>
            </Animatable.View>
            }
            
            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Please enter your 6 digit code ,will send via message?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                 onPress={() => {handleLogin()}}
                >
                <LinearGradient
                    colors={['#FF6347', '#FF6347']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Send Code</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FF6347'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
