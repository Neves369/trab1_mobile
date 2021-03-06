import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  RefreshControl,
  FlatList,
  Animated,
  Easing,
  ImageBackground
} from 'react-native';
import InsertModal from '../components/Modais/Inserir/modal_inserir';
import { EditarModal } from '../components/Modais/Editar/modal_editar';
import Aluno from '../services/Api/Alunos';
import styles from './style';
import logo from '../assets/image/logo.png';
import backgrourd from '../assets/image/bk.png'
import Icon from 'react-native-vector-icons/AntDesign';


const principal = ({ navigation }) =>{
    const [refreshing, setRefreshing] = useState(false);
    const [lista, setLista] = useState([]);
    
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 100}));
    const [opacity] = useState(new Animated.Value(0));
    const [spinAnim] = useState(new Animated.Value(0));
    const spin = spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const listaAlunos = (aluno) => {
        console.log(aluno)
        setLista(aluno)
    }

    const deleteAluno = (id) =>{
      Aluno.remove(id)
    .then( updated => Aluno.all().then((res) => listaAlunos(res)) )
    .catch( err => console.log(err) )
    }
    
    useEffect(() => {
      deleteAluno(),
      Animated.parallel([
        Animated.spring(offset.y, {
          toValue: 0,
          speed: 3,
          bounciness: 15
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
  
    }, []);

    useEffect(() => {
      Aluno.all().then((res) => listaAlunos(res))
    }, []);

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      Aluno.all().then((res) => {
        listaAlunos(res);
        setRefreshing(false);
      });
    }, []);

    Aluno.all()
    .then( 
      alunos => console.log(alunos)
    )

   

    return(
        
        <ImageBackground source={backgrourd}  style={styles.container}>
          <StatusBar backgroundColor = "#4a5059"/>

          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={styles.header}>
              <Animated.Image 
                source={logo} 
                style={{height: 80, width: 80, marginRight: 20, marginLeft: -45, transform: [{rotate: spin}]}} 
                resizeMode="contain"
              />
              <Text style={styles.title}>Curso de React Native</Text>
            </View>
            

            <View  style={styles.main}>
              <View style={styles.top}>
                <Text style={styles.subtitle}>Alunos do curso</Text>
                  <InsertModal />
              </View>
              
              <FlatList 
                data ={lista}
                renderItem={({item}) =>  
                  <Animated.View
                    style={[styles.userCard, { 
                      opacity: opacity,
                      transform:[{ translateY: offset.y }]
                    }]}
                    
                  >
                    
                    <View style={styles.userCardRight}>
                      <Text
                        style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}
                      >{`${item.nome}`}</Text>
                      <Text
                        style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}
                      >{`Primeira nota: ${item.nota1}`}</Text>
                      <Text
                        style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}
                      >{`Segunda nota: ${item.nota2}`}</Text>
                    </View>
                    <View style={styles.buttons}>

                      <EditarModal  item={item}/>
                      <Icon name="closecircleo" 
                        size={30} 
                        color="#fff"
                        style={styles.deletar}
                        onPress={()=> deleteAluno(item._id)}
                      />
                    </View>
                  </Animated.View>
                }

              />
            </View>
          </ScrollView>
        </ImageBackground>
    );
}

export default principal;
