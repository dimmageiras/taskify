import Todo from "models/models";

type InputFieldProps = {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (event: React.FormEvent<Element>) => void;
};

type TodoListProps = {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

interface SingleTodoProps extends TodoListProps {
	todo: Todo;
}

export {InputFieldProps, TodoListProps, SingleTodoProps};
