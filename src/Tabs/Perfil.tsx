import { VStack, Text, ScrollView, Avatar, Divider, Button } from 'native-base'
import { Titulo } from '../componentes/Titulo'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { pegarDadosPaciente } from '../servicos/PacienteServico'
import { Paciente } from '../interfaces/Paciente'


export default function Perfil({navigation}){
  const [dadosPaciente, setDadosPaciente,] = useState({} as Paciente)

    useEffect(() => {
      async function dadosPaciente(){
        const pacieteId = await AsyncStorage.getItem('pacienteId');
        if(!pacieteId) return null;

        const resultado = await pegarDadosPaciente(pacieteId)
        if(resultado){
          setDadosPaciente(resultado)
          console.log(resultado)
        }
      }
      dadosPaciente()
    })
      function deslogar(){
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('pacienteId')
        navigation.replace("Login")
      }

  return(
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar size="xl" source={{ uri: dadosPaciente.imagem }} mt={5} />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>{dadosPaciente.nome}</Titulo>
        <Text>dadosPaciente.email</Text>
        <Text>dadosPaciente.endereco.estado</Text>

        <Divider mt={5} />
        
        <Titulo color="blue.500" mt={1}>Planos de saúde</Titulo>
        {
          dadosPaciente.planosSaude?.map((plano, index) => (
            <Text key={index}>{plano}</Text>
          ))
        }
        <Button color="blue.500" mt={1} onPress={deslogar}>Deslogar</Button>
      </VStack>
    </ScrollView>
  )
}