import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    scrollView: {
      flex: 1,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      color: 'white',
      marginTop: 30,
      marginBottom: 20,
      height: 100,
      paddingHorizontal: 200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#48cae4',
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
    modal:{
      backgroundColor: "black",
      height: 100,
      width:10,
    },
  });

export default styles;