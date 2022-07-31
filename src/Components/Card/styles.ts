import { Divider } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5px;
`;

export const VerticalDivider = styled(Divider).attrs({
    width: 1,
    height: '60%',
    alignSelf: 'center',
    backgroundColor: 'gray',
    marginLeft: 80,
    marginTop: -25,
})`
    width: 1px;
    height: 60%;
    align-self: center;
    background-color: gray;
    margin-left: 80px;
    margin-top: -30px;
`;

export const blurTitle = styled.View`
    width: 95%;
    height: 80px;
    position: absolute;
    bottom: 0;
    background: #1e1f1e;
`;

export const TextContainer = styled.TouchableOpacity`
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${({ row }) => (row ? 'space-between' : 'center')};
    align-items: center;
    align-content: center;
    text-align: center;
`;

export const blogTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
    text-align: left;
    color: #fff;
`;

export const blogDescription = styled.Text`
    font-size: 14px;
    margin-left: 25px;
    align-self: flex-start;
    margin-top: ${({ row }) => (row ? '5px' : '20px')};
    text-align: left;
    top: 15px;
    left: -10px;
    color: ${({ white }) => (white ? 'white' : 'gray')};
    font-weight: ${({ bold }) => (bold ? 'bold' : '200')};
`;

export const Image = styled.Image`
    width: 95%;
    height: 200px;
    border-radius: 10px;
    margin-top: 10px;
`;
