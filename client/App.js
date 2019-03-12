
import { Provider } from 'react-redux';
import React from 'react';

import { AppNavigationState, store } from './src/redux/store'

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigationState />
            </Provider>
        );
    }
}

export default Root;