import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    width: '97%',
    height: 44,
    backgroundColor: '#f1f3f6',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  modalEdit:{
    marginVertical: 227,
    marginHorizontal: 20,
    height: 420,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#d8e2dc',
  },
  header:{
    color: 'white',
    marginBottom: 20,
    height: 100,
    width: 355,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48cae4',
    borderRadius: 10,
  },
  title:{
    fontSize: 20,
    fontWeight: '400',
    color: "white", 
  },
  buttons:{
    marginTop: 75,
    display: 'flex',
    flexDirection: 'row',
  },
  button:{
    paddingHorizontal: 130,
  }
});

export default styles;