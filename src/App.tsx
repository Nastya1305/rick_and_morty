import CardList from 'components/CardList';
import Filters from 'components/Filters';
import { useEffect, useRef, useState } from 'react';
import { ICharacter } from 'types/character';
import styles from 'App.module.scss';
import Pagination from 'components/Pagination';
import classNames from 'classnames';
import { useTypedSelector } from 'hooks/redux';



function App() {

  const { name, species, status, type, gender } = useTypedSelector(state => state.filterReducer);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [curPage, setCurPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const apiUrl = useRef<URL>(new URL(`https://rickandmortyapi.com/api/character/`));

  async function getCharacters(apiUrl: URL) {
    setLoading(true);

    fetch(apiUrl)
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          setError(result.error);
        } else {
          setPageCount(result.info.pages);
          setCharacters(result.results);
          setError('');
          setLoading(false);
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
      <Filters className={styles.filters} />
      {
        error ? <div className={styles.message}>{error}</div> :
          loading ? <div className={styles.message}>loading...</div> :
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
      }

    </div>
  );
}

export default App;
