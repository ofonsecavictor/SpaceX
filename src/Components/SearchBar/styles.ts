import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

export const Search = styled(Searchbar).attrs({
    iconColor: '#fff',
    placeholderTextColor: 'gray',
    selectionColor: '#fff',
    color: '#fff',
})`
    width: 90%;
    height: 7%;
    margin-top: 10px;
    font-size: 16px;
    margin-bottom: 15px;
    background-color: #1e1f1e;
`;

export const Title = styled.Text`
    margin-top: 30px;
    color: #fff;
    font-weight: bold;
    font-size: 26px;
`;
