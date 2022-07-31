import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import React from 'react';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as C from '../../Components';
import { VideoPlayer } from '../../Components/VideoPlayer';
import type { LaunchProps } from '../../Hooks/lauches';
import * as S from './styles';
type Props = {
    launch: LaunchProps;
};

export function LaunchDetails() {
    const { launch } = useRoute().params as Props;
    return (
        <>
            <C.Header back />
            <S.Container>
                <S.Text title bold start>
                    {launch.name}
                </S.Text>
                <S.TextContainer row>
                    <S.DateContainer>
                        <S.Text bold>
                            {format(new Date(launch.date_local), 'y')}
                        </S.Text>

                        <S.VerticalDivider />

                        <S.TextContainer>
                            <S.Text bold start date>
                                {format(new Date(launch.date_local), 'HH: mm ')}{' '}
                                Local
                            </S.Text>

                            <S.Text bold date>
                                {format(
                                    new Date(launch.date_local),
                                    'dd, MMMM yyyy HH: mm',
                                )}
                            </S.Text>
                        </S.TextContainer>
                        <S.TextContainer>
                            <S.Icon>
                                {launch.success ? (
                                    <Icon
                                        name="checkmark-sharp"
                                        color="green"
                                        size={24}
                                    />
                                ) : (
                                    <Icon
                                        name="close-sharp"
                                        color="red"
                                        size={24}
                                    />
                                )}
                            </S.Icon>
                        </S.TextContainer>
                    </S.DateContainer>
                </S.TextContainer>

                <VideoPlayer youtubeId={launch.links.youtube_id} />

                <S.DateContainer
                    onPress={async () => {
                        await Linking.openURL(launch.rocket.wikipedia);
                    }}>
                    <S.Text>{launch.rocket.name}</S.Text>
                    <S.Icon icon>
                        <Icon name="open-outline" color="white" size={16} />
                    </S.Icon>
                </S.DateContainer>
            </S.Container>
        </>
    );
}
