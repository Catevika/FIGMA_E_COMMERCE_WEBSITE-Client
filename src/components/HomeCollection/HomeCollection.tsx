import { Product } from '../../types';
import ProductCard from '../ProductCard/ProductCard';
import './HomeCollection.css';

type Props = {
  products: Product[];
};

const HomeCollection = ({ products }: Props) => {
  return (
    <div className='home2-products-container'>
      <div className='home2-products-content'>
        {products.map((product) => <div key={product.id} className='home1-products-card'>
          {product ? <ProductCard product={product} /> : null}
        </div>)}
      </div>
    </div>
  );
};

export default HomeCollection;