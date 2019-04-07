
// takes current state and action
export const getTodoListReducer = (state = [], action) => {
    switch (action.type) {
        // look for the particular action type:
        case 'GET_TODO_LIST':
            // return the current state of todo list
            return [...action.todoList];
        default:
            return state
    }
};
