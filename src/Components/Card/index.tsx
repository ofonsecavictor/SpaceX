import React from 'react';

import { format } from 'date-fns';
import * as S from './styles';

type Card = {
    postTitle: string;
    description: string;
    source: {
        uri: string;
    };
    onPress: () => void;
    date: Date;
};

export function Card({ onPress, postTitle, description, date, ...rest }: Card) {
    return (
        <S.Container onPress={onPress}>
            <S.Image {...rest} />

            <S.blurTitle>
                <S.TextContainer row>
                    <S.TextContainer>
                        <S.blogDescription bold white row>
                            {format(new Date(date), 'HH: mm ')}
                        </S.blogDescription>

                        <S.blogDescription row white>
                            {format(new Date(date), 'dd, MMM yy')}
                        </S.blogDescription>
                        <S.VerticalDivider />
                    </S.TextContainer>

                    <S.blogTitle numberOfLines={1}> {postTitle} </S.blogTitle>

                    <S.blogDescription white numberOfLines={2}>
                        {description}
                    </S.blogDescription>
                </S.TextContainer>
            </S.blurTitle>
        </S.Container>
    );
}
