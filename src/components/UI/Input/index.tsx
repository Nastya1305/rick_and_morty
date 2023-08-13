import { FC, useState } from 'react';
import styles from './styles.module.scss';

interface InputProps {
   placeholder?: string,
   label?: string,
   onInput: (inputValue: string) => void,
}

const Input: FC<InputProps> = ({ placeholder, onInput, label }) => {
   const [inputValue, setInputValue] = useState<string>("");
   return (
      <div className={styles.container}>
         <label>{label}</label>
         <input type='text'
            className={styles.input}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); onInput(e.target.value) }}
         />
      </div>
   );
}

export default Input;


