import {setSavedState} from './storage';
import {getSavedState} from './storage';

let initalState = {
    notes: [],
    isSideBarOpen: true,
    selectedNote: {} 
};
const localstoragekey:string = 'note_store';


export function reducer(state = initalState,action){
    switch(action.type){
        case 'SB_TOGGLE':
            let togState = {};
            if(action.payload && action.payload == 'close'){
                togState = {
                    ...state,
                    isSideBarOpen : false
                }
            } else{
                togState = {
                    ...state,
                    isSideBarOpen : !state.isSideBarOpen
                };
            }
            
            setSavedState(togState,localstoragekey);
        return togState;
        case 'ADD_NOTE':
            
                let localState = {
                    ...state,
                    notes: [...state.notes,action.payload]
                }
                setSavedState(localState,localstoragekey);
            return localState;

        case 'LOAD_NOTES':
            if(localStorage.getItem(localstoragekey) == 'undefined'){
                setSavedState(state,localstoragekey);
            }
            let storeState = getSavedState(localstoragekey);
            //state.notes = storeState.notes.slice();
            let val = {
                ...state,
                notes: storeState && storeState.notes ? storeState.notes.slice() : []
            }
            return val;
        case 'SELECTED_NOTE':
            let selNoteState = {
                ...state,
                selectedNote: {...action.note}
            }
            setSavedState(selNoteState,localstoragekey);
        return selNoteState;
        case 'EDIT_NOTE': 
            let editNoteState = state.notes.map(note => {
                if (note.id === action.payload.selId) {
                    return {...note, text: action.payload.value}
                } else{
                    return {...note};
                }
            });
            let editedState = {
                ...state,
                notes: editNoteState.slice()
            }
            setSavedState(editedState,localstoragekey);
            return editedState;
        case 'DELETE_NOTE': 
        let selIndex;
        let deleteStateArr = state.notes.filter((val,index) => {
             if(val.id !== action.payload.id){
                return val;
              } else{
                selIndex = index; 
              }
        })
            let deleteState = {
                ...state,
                notes: deleteStateArr.slice(),
                selectedNote: (deleteStateArr.length > 0) ? state.notes[selIndex + 1] : {}
            }
            setSavedState(deleteState,localstoragekey);
            return deleteState;
        case 'SEARCH_NOTES':
            let searchArr = [];
            let orgState = {};
            if(action.payload && action.payload.length > 1){
                searchArr = state.notes.filter((val,index) => {
                    if(val.text.includes(action.payload.toUpperCase()) ||
                    val.text.includes(action.payload.toLowerCase())){
                           return val; 
                    }
                })
                let searchState = {
                    ...state,
                    notes: searchArr.slice()
                }
                return searchState;
            } else{
                let storeState = getSavedState(localstoragekey);
                orgState = {
                    ...state,
                    notes: storeState && storeState.notes ? storeState.notes.slice() : []
                }
                return orgState;
            }
        default:
            return state;
    }
}
