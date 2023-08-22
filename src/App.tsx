import CardList from 'components/CardList';
import Filters from 'components/Filters';
import { useEffect } from 'react';
import styles from 'App.module.scss';
import Pagination from 'components/Pagination';
import classNames from 'classnames';
import { useAppDispatch, useTypedSelector } from 'hooks/redux';
import { fetchCharacters } from 'store/reducers/ActionCreators';
import { filterSlice } from 'store/reducers/FilterSlice';



function App() {
  const { setPage } = filterSlice.actions;
  const dispatch = useAppDispatch();

  const filter = useTypedSelector(state => state.filterReducer);
  const { characters, isLoading, error, info } = useTypedSelector(state => state.characterReducer);


  useEffect(() => {
    dispatch(fetchCharacters(filter));
  }, [filter])

  return (
    <div className={classNames("container", styles.container)}>
      <div className={styles.logoImg}>
        <img src={require("assets/logo.png")} alt="" />
      </div>
      <Filters className={styles.filters} />
      {
        error ? <div className={styles.message}>{error}</div> :
          isLoading ? <div className={styles.message}>loading...</div> :
            <>
              <CardList characters={characters} className={styles.cards} />
              {
                info.pages > 1 &&
                <Pagination
                  curPage={filter.page}
                  pageCount={info.pages}
                  pageCountDisplayed={5}
                  onPageChange={(number) => dispatch(setPage(number))}
                />
              }
            </>
      }

    </div>
  );
}

export default App;
