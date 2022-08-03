import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import * as C from '../../Components';
import { useSearch } from '../../Contexts';
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
    const { filteredData, searchFilterFunction, search } = useSearch();

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
                    keyExtractor={({ id }: LaunchProps) => id}
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
