import { FC, useState, ReactElement, SVGProps } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';


interface InputProps {
   className?: string,
   placeholder?: string,
   label?: string,
   onInput: (inputValue: string) => void,
}

const Input: FC<InputProps> = ({ className, placeholder, onInput, label }) => {
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


