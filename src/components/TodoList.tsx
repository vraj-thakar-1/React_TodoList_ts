import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((ele) => {
        return (
          <li key={ele.id}>
            <span>
              {ele.text}
              <button onClick={props.onDeleteTodo.bind(null, ele.id)}>
                Delete
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
