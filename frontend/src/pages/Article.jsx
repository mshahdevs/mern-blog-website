import { useParams } from 'react-router-dom';

export const Article = () => {
  const { name } = useParams();
  return <div>Article {name}</div>;
};
