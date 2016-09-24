import React from 'react';
import {View} from 'react-native';

//Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducer';

//Commponents
import {Header} from './components/common';
import LibraryList from './components/libraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{flex:1}}>
                <Header headerText='Tech Stack' />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;