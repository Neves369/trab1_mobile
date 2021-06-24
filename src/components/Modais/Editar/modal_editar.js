import React, {useState, useEffect} from 'react';
import { View, Text, Button, Modal, TextInput} from 'react-native';
import { useForm, Controller } from "react-hook-form"
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import Aluno from '../../../services/Api/Alunos';



export const EditarModal = (item)=>{
    const [visible, setVisible] = useState(false)
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    
    const onSubmit = data => 
         //update
        Aluno.update( item.item._id, {nome:`${data.nome}`, nota1:`${data.nota1}`, nota2:`${data.nota2}`} )
        .then( updated => console.log('Aluno updated: '+ updated),
                          setVisible(false))
        .catch( err => console.log(err) )

    return(
        <View>
            <Icon name="edit" 
                  size={30} 
                  color="#fff"
                  onPress={()=>{setVisible(true)}}

            />
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    visible={visible}
                    transparent={true}
                    style={styles.modal}

                >   
                    <View style={styles.modalEdit}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Editar Aluno</Text>
                        </View>
                        <Text>Nome do aluno:</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={'nome'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                                name="nome"
                                rules={{ required: true }}
                                defaultValue={item.item.nome}
                        />
                        {errors.Nome && <Text>Nome requerido.</Text>}
                            
                        <Text>Primeira nota:</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={'Primeira nota'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                                name="nota1"
                                defaultValue=""
                        />

                        <Text>Segunda nota:</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={'Segunda nota'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                                name="nota2"
                                defaultValue=""
                        />
                        <View style={styles.buttons}>
                            
                            <Button title="Fechar" color="#e76f51" style={styles.button}
                                onPress={()=>{setVisible(false)}} />
                            <Button title="Editar"color="#e9c46a" style={styles.button}
                                onPress={handleSubmit(onSubmit)} />
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}
