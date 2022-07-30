import styled from 'styled-components/native';

type CommonProps = {
    outline?: boolean;
    type?: 'small' | 'large';
    white?: boolean;
};

export const Button = styled.TouchableOpacity<CommonProps>`
    width: ${(props: { width: string }) =>
        props.width ? props.width : 'auto'};
    height: 60px;
    border-radius: 12px;
    background-color: ${({ outline }: CommonProps) =>
        outline ? '#4287f5' : '#fff'};
    border-color: ${({ outline }: CommonProps) =>
        outline ? 'transparent' : '#4287f5'};
    border-width: 2px;
    justify-content: center;
    align-items: center;
    margin-top: ${(props: { marginTop: string }) =>
        props.marginTop ? props.marginTop : 'auto'};
`;

export const Text = styled.Text`
    font-size: 22px;
    color: ${({ white }: CommonProps) => (white ? '#4287f5' : '#fff')};
`;
