import React from 'react';

import * as S from './styles';

type ButtonProps = {
    outline?: boolean;
    title: string;
    onPress?: () => void;
    marginTop?: string;
    width: string;
    white?: boolean;
};

export function Button({
    white,
    title,
    marginTop,
    width,
    ...rest
}: ButtonProps) {
    return (
        <>
            <S.Button marginTop={marginTop} width={width} {...rest}>
                <S.Text white={white} {...rest}>
                    {title}
                </S.Text>
            </S.Button>
        </>
    );
}
