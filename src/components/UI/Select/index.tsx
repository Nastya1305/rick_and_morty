import { FC, useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';


interface SelectProps {
   placeholder?: string,
   label?: string,
   valueList: string[],
   onChange: (newValue: string) => void
}

const Select: FC<SelectProps> = ({ placeholder, valueList, label, onChange }) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [curValue, setCurValue] = useState<string>(placeholder || valueList[0] || '')
   const select = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!isOpen) return;

      const closePopup = ({ target }: MouseEvent): void => {
         if (!select.current) return;
         if (!select.current.contains(target as Node)) {
            setIsOpen(false)
         }
      };

      document.addEventListener('click', closePopup);
      return () => document.removeEventListener('click', closePopup);
   }, [isOpen]);


   return (
      <div className={styles.container} ref={select}>
         <label>{label}</label>
         <div
            className={styles.header}
            onClick={() => setIsOpen(true)}
         >
            {curValue}
            <span className={styles.arrow}>▼</span>
         </div>

         {
            isOpen &&
            <ul className={styles.popup}>
               {
                  valueList.map(value =>
                     <li
                        key={value}
                        className={classNames(styles.option, { 'selected': value == curValue })}
                        onClick={() => { setIsOpen(false); setCurValue(value); onChange(value) }}
                     >
                        {value}
                     </li>)
               }
            </ul>

         }
      </div >

   );
}

export default Select;


