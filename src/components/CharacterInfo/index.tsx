import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Modal from 'components/UI/Modal';
import classNames from 'classnames';
import { ICharacter } from 'types/character';

interface CharacterInfoProps {
   character: ICharacter
}

const CharacterInfo: FC<CharacterInfoProps> = ({ character }) => {
   const [firstEpisode, setFirstEpisode] = useState<string>('');
   useEffect(() => {
      fetch(character.episode[0])
         .then(res => res.json())
         .then(result => setFirstEpisode(result.name))
   }, []);


   return (

      <div className={styles.container}>
         <div className={styles.img}>
            <img src={character.image} alt={character.name} />
         </div>
         <div className={styles.info}>
            <h2 className={styles.name}>{character.name}</h2>
            <div className={styles.species}>
               {character.species} {character.type && '· '} {character.type}
            </div>
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
            <dl className={styles.description}>
               <dt>Origin:</dt>
               <dd>{character.origin.name}</dd>

               <dt>Location:</dt>
               <dd>{character.location.name}</dd>

               <dt>Total episodes:</dt>
               <dd>{character.episode.length}</dd>

               <dt>First episode:</dt>
               <dd>{firstEpisode}</dd>
            </dl>
         </div>
      </div>
   )
}

export default CharacterInfo;





