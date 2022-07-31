import { Divider } from 'react-native-paper';
import styled from 'styled-components/native';
export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #0a0a0a;
`;

export const DateContainer = styled.TouchableOpacity`
    width: 90%;
    padding: 15px;
    flex-direction: row;
    background-color: #262626;
    border-radius: 5px;
    align-items: center;
    margin-top: 15px;
`;

export const Text = styled.Text`
    margin-top: ${({ title }) => (title ? '20px' : '0px')};
    font-weight: ${({ bold }) => (bold ? 'bold' : '400')};
    font-size: ${({ title }) => (title ? '22px' : '12px')};
    align-self: ${({ start }) => (start ? 'flex-start' : 'center')};
    margin-left: ${({ title }) => (title ? '20px' : '0px')};
    padding-left: ${({ date }) => (date ? '15px' : '0')};
    color: white;
`;

export const TextContainer = styled.View`
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${({ icon }) => (icon ? 'flex-end' : 'space-between')};
`;

export const LinkingContainer = styled.View`
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${({ icon }) => (icon ? 'flex-end' : 'space-between')};
`;

export const Icon = styled.View`
    justify-content: center;
    background-color: ${({ icon }) => (icon ? 'transparent' : '#0a0a0a')};
    margin-left: 120px;
    margin-left: ${({ icon }) => (icon ? '250px' : '120px')};
`;

export const List = styled.FlatList`
    width: 95%;
`;
export const Title = styled.Text`
    font-size: 22px;
    font-weight: 600;
    margin-left: 10px;
    align-self: flex-start;
    margin-top: 20px;
    text-align: left;
    color: white;
`;

export const VerticalDivider = styled(Divider).attrs({
    width: 2,
    height: '90%',
    alignSelf: 'center',
    backgroundColor: 'gray',
    marginLeft: 80,
})`
    width: 2px;
    height: 90%;
    align-self: center;
    background-color: #0a0a0a;
    margin-left: 10px;
`;
