import React, { useState, useEffect }from 'react';
import { useForm, Controller } from "react-hook-form"
import {
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  View,
  KeyboardAvoidingView, 
  ImageBackground,
  Animated,
  Easing,
  Keyboard
} from 'react-native';
import axios from 'axios';
import styles from './style';
import logo from '../assets/image/logo.png';
import backgrourd from '../assets/image/giphy2.gif';




const login = ({ navigation }) =>{

  const { control, handleSubmit, formState: { errors } } = useForm();
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 100}));
  const [opacity] = useState(new Animated.Value(0));
  const [lg] = useState(new Animated.ValueXY({x:200, y:200}))
  const [spinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  
  useEffect(()=>{
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', KeyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', KeyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 2,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration:1000,
      }),
      Animated.loop(
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 30000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      )
    ]).start();

  },[])

  function KeyboardDidShow(){
    Animated.parallel([
      Animated.timing(lg.x, {
        toValue: 170,
        duration:500,
      }),
      Animated.timing(lg.y, {
        toValue: 170,
        duration:500,
      })
    ]).start();
  }

  function KeyboardDidHide(){
    Animated.parallel([
      Animated.timing(lg.x, {
        toValue: 200,
        duration:500,
      }),
      Animated.timing(lg.y, {
        toValue: 200,
        duration:500,
      })
    ]).start();
  }


  const onSubmit = data => {
    const { email, senha } = data

    response = axios.post ("http://192.168.0.104:3000/auth/authenticate", 
    {
    "email": email,
    "senha": senha
    })
    .then(response =>{
      tk = response.data.token
      if(tk != null){
        navigation.navigate('Principal');
      }
   
      
    })
    .catch(error => {
      console.log(error)
    })   
    
  }

    return(
      <ImageBackground source={backgrourd}  style={styles.container}>
         <StatusBar backgroundColor = "#000"/>
          <KeyboardAvoidingView 
            style={styles.background}>
            <View style={styles.viewLogo}>
              <Animated.Image source={logo} 
                style={{height: lg.y, width: lg.x,  transform: [{rotate: spin}]}}
                resizeMode="contain"
              />
            </View>

            <Animated.View 
              style={[
                styles.containerLogin,
                { 
                  opacity: opacity,
                  transform:[
                    { translateY: offset.y }
                 ]
                } 
              ]}>

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.inputLogin}
                        placeholder={'Email'}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                    name="email"
                    rules={{ required: true }}
                    // defaultValue=""
              />
                {errors.email && alert("Senha requerida")}

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputLogin}
                        placeholder={'Senha'}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                    name="senha"
                    rules={{ required: true }}
                    // defaultValue=""
              />
                {errors.senha && alert("Senha requerida")}
              

              <TouchableOpacity  
                style={styles.btSubmit}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.textSubmit}>Acessar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btRegister}>
                <Text style={styles.textRegister}>Criar nova conta</Text>
              </TouchableOpacity>
            </Animated.View>
          </KeyboardAvoidingView>
      </ImageBackground>  

    );
}

export default login;
