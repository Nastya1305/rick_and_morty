import { FC, useMemo, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

interface ModalProps extends PropsWithChildren {
   setActive: (value: boolean) => void,
}

const Modal: FC<ModalProps> = ({ children, setActive }) => {
   useEffect(() => {
      document.body.classList.add('lock');
      return () => {
         document.body.classList.remove('lock');
      };
   }, []);

   const containerElement = useMemo(() =>
      document.getElementById('modal-container') as Element, []);

   return createPortal(
      <div className={styles.modalContainer} style={{ top: window.pageYOffset + 'px' }} onClick={() => setActive(false)}>
         <div className={styles.container} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActive(false)} />
            {children}
         </div>
      </div>,
      containerElement);
}

export default Modal;



