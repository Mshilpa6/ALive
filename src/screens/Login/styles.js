import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  // ================= Logo =================

  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 35,
  },

  title: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '800',
    color: '#1B1B1B',
  },

  wave: {
    fontSize: 32,
  },

  subtitle: {
    marginTop: 8,
    textAlign: 'center',
    color: '#666',
    fontSize: 15,
    lineHeight: 22,
    paddingHorizontal: 20,
  },

  // ================= Labels =================

  label: {
    marginTop: 25,
    marginHorizontal: 25,
    fontSize: 15,
    color: '#4B4B4B',
    fontWeight: '600',
  },

  // ================= Inputs =================

  input: {
    marginTop: 10,
    marginHorizontal: 25,
    height: 55,
    backgroundColor: '#F3F3F3',
    borderRadius: 18,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#222',
  },

  passwordContainer: {
    marginTop: 10,
    marginHorizontal: 25,
    height: 55,
    backgroundColor: '#F3F3F3',
    borderRadius: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#222',
  },

  // ================= Forgot =================

  forgotContainer: {
    alignSelf: 'flex-end',
    marginRight: 25,
    marginTop: 18,
  },

  forgotText: {
    color: '#00A629',
    fontSize: 16,
    fontWeight: '600',
  },

  // ================= Login =================

  loginWrapper: {
    marginHorizontal: 25,
    marginTop: 22,

    borderRadius: 35,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 8,
  },

  loginButton: {
    height: 56,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20,
  },

  // ================= Bottom =================
image: {
  flex: 1,
  width: '100%',
  justifyContent: 'flex-start',
},
bottomWrapper: {
  width: '100%',
  height: height * 0.42,
  marginTop: 30,
  overflow: 'hidden',
},

bottomContent: {
  flex: 1,
  paddingHorizontal: 25,
  paddingTop: 90,
  justifyContent: 'flex-start',
},

  // ================= OR =================

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
     marginTop: -30,
  },

  orText: {
    marginHorizontal: 12,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginTop: -30,
  },

  // ================= Social =================

  socialButton: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 18,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 6,
  },

  socialText: {
    marginLeft: 14,
    fontSize: 16,
    color: '#222',
    fontWeight: '600',
  },

  // ================= Signup =================

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },

  signupNormal: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },

  signupText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});