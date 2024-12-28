import { useState } from 'react';
import styles from './textInput.module.css';


function TextInput() {
    const [inputText, setInputText] = useState("");
    const [isPressed, setIsPressed] = useState(false);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPressed(true);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
            />
            <button type="submit" className={styles.addBtn}>Add</button>
            {isPressed && <p>{inputText}</p>}
        </form>
    );
}

  export default TextInput