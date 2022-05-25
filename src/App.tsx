import {useState} from "react";
import {nanoid} from "nanoid";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
	faCheck,
	faPenToSquare,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {InputField, TodoList} from "components";
import Todo from "models/models";
import styles from "./App.module.scss";

library.add(faCheck, faPenToSquare, faTrashCan);

const App = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);
	const handleAdd = (event: React.FormEvent<Element>) => {
		event.preventDefault();
		todo && setTodos([...todos, {id: nanoid(), todo, isDone: false}]);
		setTodo("");
	};
	return (
		<>
			<main className={styles.main}>
				<header>
					<h4 className={styles.main_heading}>Taskify</h4>
				</header>
				<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
				<TodoList todos={todos} setTodos={setTodos} />
			</main>
		</>
	);
};

export default App;
