import {combineReducers} from 'redux';
import LibrariesReducer from './libraryReducer';
import SelectionReducer from './selectionReducer';

export default combineReducers({
    libraries: LibrariesReducer,
    selectedLibraryId:SelectionReducer
})

//console.log(store.getState());
//{libraries:[{id:1,title:Wepbakc,....}]}