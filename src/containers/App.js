import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  Alert 
} from 'react-native';
import RNModal from 'react-native-modal';
import Aluno from '../services/sqlite/Alunos';



export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [rnmodalVisible, setRNModalVisible] = useState(false);
  const [lista, setLista] = useState([]);

  const listaAlunos = (aluno) => {
    console.log(aluno)
    setLista(aluno)
  }

  //create
  Aluno.create( {nome:'Joao', nota1:0.0, nota2:0.0} )
    .then( id => console.log('aluno created with id: '+ id) )
    .catch( err => console.log(err) )

  Aluno.create( {nome:'Carlos', nota1:0.0, nota2:3.4} )
    .then( id => console.log('Aluno created with id: '+ id) )
    .catch( err => console.log(err) )

  Aluno.create( {nome:'Fred', nota1:10.0, nota2:7.0} )
    .then( id => console.log('Aluno created with id: '+ id) )
    .catch( err => console.log(err) )


  useEffect(() => {
    Aluno.all().then((res) => listaAlunos(res) );
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

  return (
    // <Text>teste</Text>
    <SafeAreaView>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {lista.map((user) => (
          <TouchableOpacity
            style={styles.userCard}
            onPress={() => {
              Alert.alert(
                `${user.nome} N1: ${user.nota1} N2: ${user.nota2}`
              );
            }}
          >
            <View style={styles.userCardRight}>
              <Text
                style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}
              >{`${user.nome}`}</Text>
              <Text
                style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}
              >{`AV1: ${user.nota1}  AV2: ${user?.nota2}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  scrollView: {
    paddingHorizontal: 10,
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
});