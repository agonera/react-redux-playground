import React from "react";

export const TodoItem = ({ text, priority }) => {
    return (
        <li>
            text: {text}, priority: {priority}
        </li>
    );
};
