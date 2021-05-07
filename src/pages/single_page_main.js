import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  FlatList,
  Alert 
} from 'react-native';
import InsertModal from '../components/Modais/Inserir/modal_inserir';
import Aluno from '../services/sqlite/Alunos';
import styles from './style';



const principal = () =>{
    const [refreshing, setRefreshing] = useState(false);
    const [lista, setLista] = useState([]);

    const listaAlunos = (aluno) => {
        console.log(aluno)
        setLista(aluno)
    }
    

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

        <SafeAreaView style={styles.container}>
          
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={styles.header}>
              <Text>Curso de React Native</Text>
            </View>

            

            <View style={styles.main}>
              <View style={styles.top}>
                <Text style={styles.title}>Alunos do curso</Text>
                <InsertModal/>
              </View>
              
              <FlatList 
                data ={lista}
                renderItem={({item}) =>  
                  <TouchableOpacity
                    style={styles.userCard}
                    onPress={() => {
                      Alert.alert(
                        `${item.nome} N1: ${item.nota1} N2: ${item.nota2}`
                      );
                    }}
                  >
                    <View style={styles.userCardRight}>
                      <Text
                        style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}
                      >{`${item.nome}`}</Text>
                      <Text
                        style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}
                      >{`Primeira nota: ${item.nota1}  Segunda nota: ${item?.nota2}`}</Text>
                    </View>
                  </TouchableOpacity>}

              />
            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

export default principal;
