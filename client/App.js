
import { Provider } from 'react-redux';
import React from 'react';

import { AppNavigationState, store } from './src/redux/store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigationState />
            </Provider>
        );
    }
}

export default App;