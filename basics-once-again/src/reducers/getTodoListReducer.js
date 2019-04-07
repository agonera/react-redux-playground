export const getTodoListReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TODO_LIST':
            return [...action.todoList];
        default:
            return state
    }
};
