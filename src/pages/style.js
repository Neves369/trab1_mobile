import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  // tela de login
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#191919'
    },
    viewLogo:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',

    },
    containerLogin:{
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'center',
      width: '100%',
      
    },
    inputLogin:{
      width: '90%',
      height: 44,
      marginBottom: 23,
      fontSize: 17,
      color: '#222',
      backgroundColor: '#f1f3f6',
      borderRadius: 6,
      paddingHorizontal: 10,
      
    },
    btSubmit:{
      backgroundColor: "#00C2F8",
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
    },
    textSubmit:{
      color: "#fff",
      fontSize: 18
    },
    btRegister:{
      marginTop: 15
    },
    textRegister:{
      color: "#5dddff",
      fontSize: 16
    },


  // tela principal
    container:{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    scrollView: {
      flex: 1,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      display: 'flex',
      flexDirection: 'row',
      color: 'white',
      marginTop: 35,
      marginBottom: 20,
      height: 100,
      paddingTop: 20,
      paddingBottom: 20,
      paddingHorizontal: 70,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#48cae4',
      borderRadius: 10,
    },
    main: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
    },
    top:{
        backgroundColor: '#48cae4',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 6,

    },
    title:{
      fontSize: 20,
      fontWeight: '400',
      color: "white",
  
      
      
    },
    subtitle:{
      fontSize: 20,
      fontWeight: '400',
      color: "white",
      paddingRight: 160,
    },
    userCard: {
      backgroundColor: '#2f3542',
      paddingVertical: 6,
      paddingHorizontal: 6,
      borderRadius: 10,
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userCardRight: {
      paddingHorizontal: 10,
    },
    input:{
      width: '97%',
      height: 44,
      backgroundColor: '#f1f3f6',
      borderRadius: 6,
      paddingHorizontal: 10,
    },
    buttons:{
      marginLeft: 100,
      display: 'flex',
      flexDirection: 'row',
    },
    deletar:{
      marginLeft: 14,
    },
  });

export default styles;