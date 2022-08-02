import React from 'react';

import * as S from './styles';

type SearchProps = {
    onChangeText: any;
    value: any;
};

export function SearchBar({ value, onChangeText }: SearchProps) {
    return (
        <S.Search
            autoCorrect={false}
            placeholder="Search"
            onChangeText={onChangeText}
            value={value}
        />
    );
}
