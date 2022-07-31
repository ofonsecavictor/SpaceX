import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
export const Container = styled.View`
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #0a0a0af5;
`;

export const Title = styled.Text`
    margin-top: 30px;
    color: #fff;
    font-weight: bold;
    font-size: 26px;
`;

export const Logo = styled.Image`
    height: 50px;
    width: 400px;
    margin-top: 20px;
`;

export const Back = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 50px;
    margin-left: 30px;
    margin-top: 30px;
`;

export const Icons = styled(Icon)``;
