// action creator: selectItem
// return an action


export const selectItem = (item) => { // import { selectItem } from ...
    return {
        // type is required
        type: 'ITEM_SELECTED',
        // payload not necessary, but we use it to specify what item we selected
        payload: item
    };
};



/*      ACTION
        - plain JavaScript objects
        - describes WHAT is happening
        - ONLY source of information to the store
        - sending to the store: store.dispatch()

        ACTION CREATORS
        - if we want to change state in Redux, we call actions creators
        - they create actions (return an action)
*/