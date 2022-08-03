import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import * as S from './styles';

export function VideoPlayer({ youtubeId }: { youtubeId: string }) {
    return (
        <S.Container>
            <YoutubePlayer height={230} width={370} videoId={youtubeId} />
        </S.Container>
    );
}
