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