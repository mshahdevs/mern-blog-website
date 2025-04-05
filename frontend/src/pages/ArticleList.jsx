import { articles } from '../utils/data';
import { Articles } from '../components/Articles';

export const ArticleList = () => {
  return (
    <div>
      <h1>Articles</h1>
      <Articles articles={articles} />
    </div>
  );
};
