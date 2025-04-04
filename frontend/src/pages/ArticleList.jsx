import { Link } from 'react-router-dom';
import { articles } from '../utils/data';

export const ArticleList = () => {
  return (
    <div>
      <h1>Articles</h1>
      <div>
        <div>
          {articles?.map((article, index) => (
            <div key={index}>
              <div>
                <Link to={`/article/${article.name}`}>
                  <img src={article.thumbnail} alt='image' />
                </Link>
                <h1>{article.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
