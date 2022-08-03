import { useQuery } from 'react-query';

import { spaceX } from '../api/client.tsx';
import type { LaunchPaginationProps, LaunchProps } from './lauches';

const getRecentLaunches = async (): Promise<LaunchProps[]> => {
    const { data } = await spaceX.post<LaunchPaginationProps>(
        '/launches/query',
        {
            query: {
                upcoming: false,
            },
            options: {
                pagination: false,
                sort: {
                    flight_number: 'desc',
                },
                populate: [
                    'payloads',
                    'rocket',
                    'launchpad',
                    {
                        path: 'cores',
                        populate: [
                            {
                                path: 'landpad',
                            },
                            {
                                path: 'core',
                            },
                        ],
                    },
                ],
            },
        },
    );

    return data.docs;
};

export function useRecentLaunches() {
    return useQuery(['recentLaunches'], getRecentLaunches);
}
