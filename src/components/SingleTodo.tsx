import React, {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SingleTodoProps} from "./index.props";
import styles from "./SingleTodo.module.scss";

const SingleToDo = ({todo, todos, setTodos}: SingleTodoProps) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);

	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

	const handleEdit = (event: React.FormEvent, id: string) => {
		event.preventDefault();
		setTodos(
			todos.map(todo => (todo.id === id ? {...todo, todo: editTodo} : todo))
		);
		setEdit(false);
	};

	const handleDelete = (id: string) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const handleDone = (id: string) => {
		setTodos(
			todos.map(todo => (todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
		);
	};

	return (
		<>
			<form
				className={styles.todos_single}
				onSubmit={event => handleEdit(event, todo.id)}>
				{edit ? (
					<input
						value={editTodo}
						onChange={event => setEditTodo(event.target.value)}
						className={styles.todos_single_text}
						ref={inputRef}
					/>
				) : todo.isDone ? (
					<span
						className={`${styles.todos_single_text} ${styles.todos_single_done}`}>
						{todo.todo}
					</span>
				) : (
					<span className={styles.todos_single_text}>{todo.todo}</span>
				)}
				<div>
					<span
						className={styles.todos_single_icon}
						onClick={() => {
							!edit && !todo.isDone && setEdit(!edit);
						}}>
						<FontAwesomeIcon icon={["fas", "pen-to-square"]} />
					</span>
					<span
						className={styles.todos_single_icon}
						onClick={() => handleDelete(todo.id)}>
						<FontAwesomeIcon icon={["fas", "trash-can"]} />
					</span>
					<span
						className={styles.todos_single_icon}
						onClick={() => handleDone(todo.id)}>
						<FontAwesomeIcon icon={["fas", "check"]} />
					</span>
				</div>
			</form>
		</>
	);
};

export default SingleToDo;
