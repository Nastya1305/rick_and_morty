import CardList from 'components/CardList';
import Filters from 'components/Filters';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&species=${species}&type=${type}&gender=${gender}&status=${status}&page=${curPage}`)
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          setCharacters([])
        } else {
          //ошибка при изменении параметров фильтрации номер страницы остается прежним - карточки не находятся
          setPageCount(result.info.pages);
          setCharacters(result.results);
        }
      })
  }, [name, species, status, type, gender, curPage]);



  return (
    <div className={classNames("container", styles.container)}>
      <div className={styles.logoImg}>
        <img src={require("assets/logo.png")} alt="" />
      </div>
      <Filters />
      <CardList characters={characters} className={styles.cards} />
      <Pagination curPage={curPage} pageCount={pageCount} pageCountDisplayed={5} onPageChange={(number) => setCurPage(number)} />
    </div>
  );
}

export default App;
