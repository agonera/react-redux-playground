// define an action
export const getTodoList = todoList => ({
    type: 'GET_TODO_LIST',
    todoList
});


export const searchTodoItems = text => ({
    type: 'SEARCH_TODO_ITEMS',
    text
});