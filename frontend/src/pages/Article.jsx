import { useParams } from 'react-router-dom';
import { articles } from '../utils/data';
export const Article = () => {
  const { name } = useParams();

  const article = articles.find((article) => article.name === name);
  console.log(article);
  if (!article) {
    return <h1>Article does not exist</h1>;
  }
  return (
    <div>
      Article{' '}
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
  );
};
