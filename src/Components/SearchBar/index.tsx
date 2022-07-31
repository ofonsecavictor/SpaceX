import React, { useState } from 'react';

import * as S from './styles';

type SearchProps = {
    onChangeText: any;
    value: any;
};

export function SearchBar({ value, onChangeText }: SearchProps) {
    const [isActive, setIsActive] = useState(false);
    const OpenSearch = () => {
        setIsActive(!isActive);
    };
    return (
        <S.Search
            style={{ backgroundColor: isActive ? 'white' : 'transparent' }}
            iconColor={isActive ? 'black' : 'white'}
            isSearching={isActive}
            onIconPress={OpenSearch}
            autoCorrect={false}
            placeholder="Search"
            onChangeText={onChangeText}
            value={value}
        />
    );
}
