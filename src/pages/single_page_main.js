import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  FlatList
} from 'react-native';
import InsertModal from '../components/Modais/Inserir/modal_inserir';
import { EditarModal } from '../components/Modais/Editar/modal_editar';
import Aluno from '../services/sqlite/Alunos';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';



const principal = () =>{
    const [refreshing, setRefreshing] = useState(false);
    const [lista, setLista] = useState([]);

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
      deleteAluno()
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

        <SafeAreaView style={styles.container}>
          
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={styles.header}>
              <Text style={styles.title}>Curso de React Native</Text>
            </View>
            

            <View style={styles.main}>
              <View style={styles.top}>
                <Text style={styles.subtitle}>Alunos do curso</Text>
                <InsertModal />
              </View>
              
              <FlatList 
                data ={lista}
                renderItem={({item}) =>  
                  <TouchableOpacity
                    style={styles.userCard}
                    // onPress={() => handleTest()}
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
                      >{`Segunda nota: ${item?.nota2}`}</Text>
                    </View>
                    <View style={styles.buttons}>

                      <EditarModal  item={item}/>
                      <Icon name="closecircleo" 
                        size={30} 
                        color="#000"
                        onPress={()=> deleteAluno(item.id)}
                      />
                    </View>
                  </TouchableOpacity>
                }

              />
            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

export default principal;
