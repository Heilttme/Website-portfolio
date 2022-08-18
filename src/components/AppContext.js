import React, {createContext} from 'react';

const {Provider, Consumer} = createContext()

function AppContextProvider(props) {
    return (
        <Provider value={props.value}>
            {props.children}
        </Provider>
    )
}

export {AppContextProvider, Consumer as AppContextConsumer}