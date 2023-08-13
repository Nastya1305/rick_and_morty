import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { ICharacter } from 'types/character';
import CharacterInfo from 'components/CharacterInfo';
import Modal from 'components/UI/Modal';


interface CardProps {
   character: ICharacter;
}

const Card: FC<CardProps> = ({ character }) => {
   const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);

   return (
      <div className={styles.container} onClick={() => setPopupIsOpen(true)}>
         <div className={styles.img}>
            <img src={character.image} alt={character.name} />
         </div>
         <div className={styles.text}>
            <div className={styles.tags}>
               {
                  character.gender !== 'unknown' &&
                  <div className={styles[character.gender]}>
                     {character.gender}
                  </div>
               }
               {
                  character.status !== 'unknown' &&
                  <div className={styles[character.status]}>
                     {character.status}
                  </div>
               }
            </div>
            <div className={styles.name}>{character.name}</div>
         </div>
         {
            popupIsOpen &&
            <Modal setActive={setPopupIsOpen}>
               <CharacterInfo character={character} />
            </Modal>
         }
      </div >
   )
}

export default Card;





