import { combineReducers } from 'redux';


const itemReducer = () => { // no actions; it returns only an array of items; we do not change it here
    return [
        { task: 'feed the dog', priority: '1' },
        { task: 'do the shopping', priority: '3' },
        { task: 'wash the car', priority: '2' }
    ];
};

const selectedItemReducer = (selectedItem = null, action) => {
    if (action.type === 'ITEM_SELECTED') {
        return action.payload;
    }
    return selectedItem;
};


export default combineReducers({
    // keys: do sth with key
    items: itemReducer,
    selectedItem: selectedItemReducer
});



/*      REDUCER
        - specfify HOW the state changes
        - response to actions (only describe WHAT happened) sent to the store
        - takes previous state and actions -> returns new state
        - avoid non-pure functions in reducers
        - should be predictable
        - root reducer may combine the output of multiple reducers into a single state tree -> combineReducers
*/