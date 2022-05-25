import {TodoListProps} from "./index.props";
import SingleTodo from "./SingleTodo";
import styles from "./TodoList.module.scss";

const TodoList = ({todos, setTodos}: TodoListProps) => {
	return (
		<>
			<div className={styles.todos}>
				{todos?.map(todo => (
					<SingleTodo todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />
				))}
			</div>
		</>
	);
};

export default TodoList;
