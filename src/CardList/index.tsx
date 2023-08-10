import { FC } from 'react';
import Card from 'Card';
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

               <Card character={character} />
            )
               :
               <div className='message'>Товары не найдены</div>

         }
      </div>
   );
};

export default CardList;
