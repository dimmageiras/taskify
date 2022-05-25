import {useRef} from "react";
import {InputFieldProps} from "./index.props";
import styles from "./InputField.module.scss";

const InputField = ({todo, setTodo, handleAdd}: InputFieldProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: React.FormEvent<Element>) => {
		inputRef.current?.blur();
		handleAdd(event);
	};
	return (
		<>
			<form className={styles.input} onSubmit={handleSubmit}>
				<input
					ref={inputRef}
					type="text"
					className={styles.input_box}
					placeholder="Enter a Task"
					value={todo}
					onChange={event => setTodo(event.target.value)}
					autoComplete="off"
				/>
				<button type="submit" className={styles.input_submit}>
					GO
				</button>
			</form>
		</>
	);
};

export default InputField;
