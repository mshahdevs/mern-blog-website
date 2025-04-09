import { useParams } from 'react-router-dom';
import { articles } from '../utils/data';
import { Articles } from '../components/Articles';
export const Article = () => {
  const { name } = useParams();

  const article = articles.find((article) => article.name === name);

  if (!article) {
    return <h1>Article does not exist</h1>;
  }
  const otherArticles = articles.filter((article) => article.name !== name);
  return (
    <>
      <div>
        <h1
          className='font-bold text-xl mt-2
      '
        >
          {article.title}
        </h1>
        {article?.content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      {/* Other Articles  */}
      <h1 className='font-semibold mt-4 text-2xl'>Other Articles</h1>
      <Articles articles={otherArticles} />
    </>
  );
};
