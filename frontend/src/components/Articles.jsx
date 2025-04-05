import { Link } from 'react-router-dom';

export const Articles = ({ articles }) => {
  return (
    <div className='w-full flex gap-2 px-2 '>
      {articles?.map((article, index) => (
        <div
          key={index}
          className='shadow border-gray-300 rounded-2xl p-2 w-[20%]'
        >
          <Link to={`/article/${article.name}`} className='w-full'>
            <img
              src={article.thumbnail}
              className='lg:h-48 md:h-36 w-full object-cover object-center'
              alt='image'
            />
          </Link>
          <Link to={`/article/${article.name}`}>
            <h1 className='font-semibold text-xl'>{article.title}</h1>
          </Link>
          <p>{article.content[0].substring(0, 110)}...</p>
        </div>
      ))}
    </div>
  );
};
