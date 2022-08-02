import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationProps } from '../../Routes/appStack';
import { SearchBar } from '../SearchBar';

import * as S from './styles';

type Header = {
    onChangeText?: any;
    value?: any;
    back?: boolean;
};

type NavigationParam = NativeStackNavigationProp<
    NavigationProps,
    'LaunchDetails'
>;

export function Header({ onChangeText, value, back }: Header) {
    const navigation = useNavigation<NavigationParam>();
    return (
        <>
            <S.Container row>
                {back && (
                    <S.Back
                        onPress={() => navigation.goBack()}
                        hitSlop={{ top: 30, bottom: 30, left: 30, right: 80 }}>
                        <S.Icons name="chevron-back" color="white" size={24} />
                    </S.Back>
                )}
                <S.Logo source={require('../../Assets/SpaceX-Logo.png')} />
            </S.Container>
            {onChangeText && (
                <SearchBar onChangeText={onChangeText} value={value} />
            )}
        </>
    );
}
