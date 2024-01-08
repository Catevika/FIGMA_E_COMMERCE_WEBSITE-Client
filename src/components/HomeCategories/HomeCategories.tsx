import { Category } from '../../types';
import CategoryCard from '../CategoryCard/CategoryCard';
import './HomeCategories.css';

type Props = {
  categories: Category[];
};

const HomeCategories = ({ categories }: Props) => {
  return (
    <div className='home3-categories-content'>
      {categories.map((category) => <div key={category.id} className='home3-categories-card'>
        {category ? <CategoryCard category={category} /> : null}
      </div>)}
    </div>
  );
};

export default HomeCategories;