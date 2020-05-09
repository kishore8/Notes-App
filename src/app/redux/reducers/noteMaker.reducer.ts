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
            let togState = {
                ...state,
                isSideBarOpen : !state.isSideBarOpen
            };
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

            let mock = {
                ...state,
                notes: editNoteState.slice()
            }
            setSavedState(mock,localstoragekey);
            return mock;
        default:
            return state;
    }
}
