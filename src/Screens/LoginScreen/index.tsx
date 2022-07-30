import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from '../../Components/Button';
import { NavigationProps } from '../../Routes/appStack';
import * as S from './styles';

type authScreen = NativeStackNavigationProp<NavigationProps, 'HomeScreen'>;

export function LoginScreen() {
    const navigation = useNavigation<authScreen>();

    return (
        <S.Container>
            <S.Logo source={require('../../Assets/SpaceX-Logo.png')} />
            <S.Content>
                <Button
                    width={'80%'}
                    outline
                    title={'ENTRAR'}
                    onPress={() => navigation.navigate('HomeScreen')}
                    marginTop={'0px'}
                />
                <S.ContentText>
                    <S.Text>Não possui conta?</S.Text>
                    <S.Text link>Criar Agora</S.Text>
                </S.ContentText>
            </S.Content>
        </S.Container>
    );
}
