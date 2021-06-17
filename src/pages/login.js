import React from 'react';
import {
  Text,
  View,
  ScrollView,
 
  ImageBackground
} from 'react-native';
import InsertModal from '../components/Modais/Inserir/modal_inserir';
import { EditarModal } from '../components/Modais/Editar/modal_editar';
import Aluno from '../services/sqlite/Alunos';
import styles from './style';
import logo from '../assets/image/logo.png';
import backgrourd from '../assets/image/bk.png'
import Icon from 'react-native-vector-icons/AntDesign';


const login = () =>{


    return(

        <ImageBackground source={backgrourd}  style={styles.container}>
          
          <ScrollView
            contentContainerStyle={styles.scrollView}
        
          >
            <View style={styles.header}>
             
              <Text style={styles.title}>login</Text>
              <Text style={styles.title}>E-mail</Text>
              <Text style={styles.title}>Senha</Text>
              <Text style={styles.title}>login</Text>
              
           
            </View>
          </ScrollView>
        </ImageBackground>
    );
}

export default login;
