// import React, {useState, useEffect} from 'react';
// import { View, Text, Button, Modal, TextInput} from 'react-native';
// import { useForm, Controller } from "react-hook-form"
// import Icon from 'react-native-vector-icons/AntDesign';
// import styles from './style';
// import Aluno from '../../../services/sqlite/Alunos';



// export default function(){
//     const [visible, setVisible] = useState(false)
//     const { control, handleSubmit, formState: { errors } } = useForm();
    
//     //Atualizar dados do
//     const onSubmit = data => 
//          //update
//         Aluno.update( 1, {nome:`${data.nome}`, nota1:`${data.nota1}`, nota2:`${data.nota2}`} )
//         .then( updated => console.log('Aluno updated: '+ updated) )
//         .catch( err => console.log(err) )
    
//     // const editarAluno = (()=> 
//     //     Aluno.update( 1, {nome:`${}`, nota1:`${}`, nota2:`${}`} )
//     //     .then( updated => console.log('Cars updated: '+ updated) )
//     //     .catch( err => console.log(err) )
    


//     return(
//         <View>
//             <View style={styles.container}>
//                 <Modal
//                     visible={visible}
//                     style={styles.modal}
//                 >
//                     <Text>Nome do aluno:</Text>
//                     <Controller
//                         control={control}
//                         render={({ field: { onChange, onBlur, value } }) => (
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder={'nome'}
//                                 onBlur={onBlur}
//                                 onChangeText={value => onChange(value)}
//                                 value={value}
//                             />
//                         )}
//                             name="nome"
//                             rules={{ required: true }}
//                             defaultValue=""
//                     />
//                     {errors.Nome && <Text>Nome requerido.</Text>}
                    
//                     <Text>Primeira nota:</Text>
//                     <Controller
//                         control={control}
//                         render={({ field: { onChange, onBlur, value } }) => (
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder={'Primeira nota'}
//                                 onBlur={onBlur}
//                                 onChangeText={value => onChange(value)}
//                                 value={value}
//                             />
//                         )}
//                             name="nota1"
//                             defaultValue=""
//                     />
                    
//                     <Text>Segunda nota:</Text>
//                     <Controller
//                         control={control}
//                         render={({ field: { onChange, onBlur, value } }) => (
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder={'Segunda nota'}
//                                 onBlur={onBlur}
//                                 onChangeText={value => onChange(value)}
//                                 value={value}
//                             />
//                         )}
//                             name="nota2"
//                             defaultValue=""
//                     />

//                     <Button title="Submit" onPress={handleSubmit(onSubmit)} />
//                     <Button title="Delete" onPress={()=>editarAluno()} />
//                     <Button title="Close" onPress={()=>{setVisible(false)}} />
//                 </Modal>
//             </View>
//         </View>
//     );
// }
