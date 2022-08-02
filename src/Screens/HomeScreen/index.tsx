import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import * as C from '../../Components';
import { LaunchProps } from '../../Hooks/lauches';
import { useRecentLaunches } from '../../Hooks/useLaunches';

import { NavigationProps } from '../../Routes/appStack';
import * as S from './styles';

type NavigationParam = NativeStackNavigationProp<
    NavigationProps,
    'LaunchDetails'
>;

export function HomeScreen() {
    const navigation = useNavigation<NavigationParam>();
    const { data: launches, isLoading } = useRecentLaunches();
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState<LaunchProps>();

    const searchFilterFunction = (text: string) => {
        console.log(text);
        if (text) {
            const newData = launches.filter(function (item: { name: string }) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            setFilteredData(launches);
            setSearch(text);
        }
    };

    return (
        <S.Container>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor="transparent"
            />
            <C.Header
                onChangeText={(text: string) => searchFilterFunction(text)}
                value={search}
            />
            {isLoading ? (
                <ActivityIndicator size={24} color={'white'} />
            ) : (
                <S.List
                    data={filteredData ? filteredData : launches}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={({ id }: LaunchProps[]) => id}
                    scrollEventThrottle={16}
                    onEndReachedThreshold={0.5}
                    initialNumToRender={20}
                    maxToRenderPerBatch={10}
                    removeClippedSubviews
                    ListHeaderComponent={
                        <S.Title>Lançamentos completos</S.Title>
                    }
                    renderItem={({ item: launch }: { item: LaunchProps }) => {
                        return (
                            <C.Card
                                key={launch.id}
                                onPress={() =>
                                    navigation.navigate('LaunchDetails', {
                                        launch,
                                    })
                                }
                                source={{
                                    uri: `https://img.youtube.com/vi/${launch.links.youtube_id}/0.jpg`,
                                }}
                                date={launch.date_local}
                                postTitle={launch.name}
                                description={launch.rocket.name}
                            />
                        );
                    }}
                />
            )}
        </S.Container>
    );
}
