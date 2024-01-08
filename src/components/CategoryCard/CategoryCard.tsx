import { Category } from '../../types';
import './CategoryCard.css';

type Props = {
  category: Category;
};

const CategoryCard = ({ category }: Props) => {
  const { url, name } = category;
  return (
    <div className='category-card'>
      <img src={url} alt={name} />
      <p className='label-2'>{name}</p>
    </div>
  );
};

export default CategoryCard;