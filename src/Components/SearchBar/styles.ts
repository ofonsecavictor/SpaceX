import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

export const Search = styled(Searchbar).attrs({})`
    width: ${(props: { isSearching: boolean }) =>
        props.isSearching ? '50%' : 0};
    height: 5%;
    margin-top: 45px;
    font-size: 16px;
    margin-bottom: 15px;
`;

export const Title = styled.Text`
    margin-top: 30px;
    color: #fff;
    font-weight: bold;
    font-size: 26px;
`;
