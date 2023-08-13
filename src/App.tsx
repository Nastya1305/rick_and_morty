import CardList from 'components/CardList';
import Filters from 'components/Filters';
import { useEffect, useRef, useState } from 'react';
import { ICharacter } from 'types/character';
import styles from 'App.module.scss';
import Pagination from 'components/Pagination';
import classNames from 'classnames';
import { useTypedSelector } from 'hooks/useTypedSelector';



function App() {

  const { name, species, status, type, gender } = useTypedSelector(state => state.filter);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [curPage, setCurPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const apiUrl = useRef<URL>(new URL(`https://rickandmortyapi.com/api/character/`));

  async function getCharacters(apiUrl: URL) {
    fetch(apiUrl)
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          setError(result.error);
        } else {
          setPageCount(result.info.pages);
          setCharacters(result.results);
          setError('');
        }
      });
    window.scrollTo(0, 0)
  }


  useEffect(() => {
    apiUrl.current.searchParams.set('name', name);
    apiUrl.current.searchParams.set('species', species);
    apiUrl.current.searchParams.set('type', type);
    apiUrl.current.searchParams.set('gender', gender);
    apiUrl.current.searchParams.set('status', status);
    setCurPage(1);
    apiUrl.current.searchParams.set('page', '1');

    getCharacters(apiUrl.current);
  }, [name, species, status, type, gender]);


  useEffect(() => {
    apiUrl.current.searchParams.set('page', String(curPage));
    getCharacters(apiUrl.current);
  }, [curPage]);


  return (
    <div className={classNames("container", styles.container)}>
      <div className={styles.logoImg}>
        <img src={require("assets/logo.png")} alt="" />
      </div>
      <Filters />
      {
        !error ?
          <>
            <CardList characters={characters} className={styles.cards} />
            {
              pageCount > 1 &&
              <Pagination
                curPage={curPage}
                pageCount={pageCount}
                pageCountDisplayed={5}
                onPageChange={(number) => setCurPage(number)}
              />
            }
          </>
          : <div className={styles.message}>{error}</div>
      }

    </div>
  );
}

export default App;
