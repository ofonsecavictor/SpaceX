import React, { useContext, useState } from 'react';

import { LaunchProps } from '../../Hooks/lauches';
import { useRecentLaunches } from '../../Hooks/useLaunches';

type Context = {
    searchFilterFunction: (text: string) => void;
    filteredData: any;
    search: string;
};
const SearchContext = React.createContext({} as Context);

export function ApiSearchProvider({ children }: any) {
    const { data: launches } = useRecentLaunches();
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState<LaunchProps>();

    const searchFilterFunction = (text: string) => {
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
        <SearchContext.Provider
            value={{
                filteredData,
                search,
                searchFilterFunction,
            }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}
