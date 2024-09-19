import { Route, Switch } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
import { useDispatch } from 'react-redux';
import { loadArticles } from '../../store/articleReducer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state=>state.articleState.entries);


  useEffect(() => {
    dispatch(loadArticles());
}, []);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
      {articles.map(({ id, title }) => (
  <li key={id}><NavLink to={`/article/${id}`}>{title}</NavLink></li>
))}
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
