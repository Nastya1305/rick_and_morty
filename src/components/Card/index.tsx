import { FC } from 'react';
import styles from './styles.module.scss';
import { ICharacter } from 'types/character';
import classNames from 'classnames';


interface CardProps {
   character: ICharacter;
}

const Card: FC<CardProps> = ({ character }) => {

   return (
      <div className={styles.container}>
         <div className={styles.img}>
            <img src={character.image} />
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
      </div >
   )
}

export default Card;





