import styled from 'styled-components/native';

type styledProps = {
    link: boolean;
};

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;

export const Logo = styled.Image`
    height: 200px;
    width: 100%;
    margin-top: 50px;
`;

export const Content = styled.View`
    margin-top: 200px;
    align-items: center;
    width: 100%;
`;

export const ContentText = styled.View`
    flex-direction: row;
`;

export const Text = styled.Text<styledProps>`
    margin-top: 10px;
    font-size: 14px;
    color: ${({ link }: styledProps) => (link ? '#4287f5' : '#000')};
    margin-left: ${({ link }: styledProps) => (link ? '10px' : '10px')};
`;
