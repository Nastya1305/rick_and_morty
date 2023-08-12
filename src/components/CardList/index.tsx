import { FC } from 'react';
import Card from 'components/Card';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ICharacter } from 'types/character';

interface CardListProps {
   characters: ICharacter[],
   className?: string
}


const CardList: FC<CardListProps> = ({ characters, className }) => {
   return (
      <div className={classNames(styles.container, className)}>
         {
            characters.length ? characters.map(character =>
               <div className={styles.column} key={character.id}>
                  <Card character={character} />
               </div>

            )
               :
               <div className={styles.message}>There is nothing here</div>

         }
      </div>
   );
};

export default CardList;
