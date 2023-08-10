import { FC } from 'react';
import styles from './styles.module.scss';
import { ICharacter } from 'types/character';


interface CardProps {
   character: ICharacter;
}

const Card: FC<CardProps> = ({ character }) => {

   return (
      <div className={styles.container}>
         <div>{character.name}</div>
      </div >
   )
}

export default Card;





