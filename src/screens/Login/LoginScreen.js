import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView, ImageBackground
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const onLogin = () => {
    navigation.replace('Home');
  };

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  
 const handleGoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const response = await GoogleSignin.signIn();

    console.log('Google Response:', response);

    // Supports both old and new versions
    const user = response?.data?.user || response?.user;

    if (!user) {
      Alert.alert('Error', 'Unable to fetch Google account.');
      return;
    }

    await AsyncStorage.setItem(
      'userData',
      JSON.stringify({
        name: user.name,
        email: user.email,
        photo: user.photo,
      }),
    );

    Alert.alert('Success', 'Google Login Successful');

    navigation.replace('Home');
  } catch (error) {
    console.log('Google SignIn Error:', error);

    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert('Cancelled', 'User cancelled login');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('Please wait', 'Sign-in already in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert('Google Play Services', 'Not available or outdated');
    } else {
      Alert.alert('Google Login Error', JSON.stringify(error));
    }
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* Logo */}
        <Image
          source={require('../../assets/images/erasebg.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Heading */}
        <Text style={styles.title}>
          Welcome back! <Text style={styles.wave}>👋</Text>
        </Text>

        <Text style={styles.subtitle}>
          Sign in to continue your live streaming journey.
        </Text>

        {/* Email */}
        <Text style={styles.label}>
          Email ID or Phone Number
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Registered Email or Phone No."
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password */}
        <Text style={[styles.label, { marginTop: 18 }]}>
          Password
        </Text>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry={secure}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSecure(!secure)}>
            <Ionicons
              name={
                secure
                  ? 'eye-outline'
                  : 'eye-off-outline'
              }
              size={24}
              color="#777"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.forgotContainer}>
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.loginWrapper}
          onPress={onLogin}>

          <LinearGradient
            colors={[
              '#E8FF00',
              '#73DB09',
              '#06A51E',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.loginButton}>

            <Text style={styles.loginText}>
              Login
            </Text>

          </LinearGradient>

        </TouchableOpacity>

        {/* Bottom Section */}
        <View style={styles.bottomWrapper}>
          <ImageBackground
            source={require('../../assets/images/splashb.jpeg')}
            resizeMode="cover"
            style={styles.image}>

            <View style={styles.bottomContent}>

              {/* OR */}
              <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>or continue with</Text>
                <View style={styles.line} />
              </View>

              {/* Google */}
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.socialButton}
                onPress={handleGoogleLogin}>
                <Ionicons
                  name="logo-google"
                  size={26}
                  color="#EA4335"
                />
                <Text style={styles.socialText}>
                  Continue with Google
                </Text>
              </TouchableOpacity>

              {/* Facebook */}
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.socialButton}>
                <Ionicons
                  name="logo-facebook"
                  size={26}
                  color="#1877F2"
                />
                <Text style={styles.socialText}>
                  Continue with Facebook
                </Text>
              </TouchableOpacity>

              {/* Signup */}
              <View style={styles.signupRow}>
                <Text style={styles.signupNormal}>
                  Don't have an account?
                </Text>

                <TouchableOpacity>
                  <Text style={styles.signupText}>
                    {' '}Sign Up
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

          </ImageBackground>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;