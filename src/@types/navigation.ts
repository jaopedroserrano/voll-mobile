import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from "@react-navigation/native";

export type ListaTelas = {
    Login: undefined;
    Cadastro: undefined;
    Perfil: undefined;
    Explorar: undefined;
    Consultas: undefined;
    Principal: undefined;
    Taps: undefined;
    Agendamento: {especialistaId: String}
}

export type NavigationProp< T extends keyof ListaTelas > = {
    navigation: NativeStackNavigationProp<ListaTelas, T>;
    route: RouteProp<ListaTelas, T>
}