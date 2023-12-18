import { products } from '../../../data.tsx';
import ProductCard from '../ProductCard/ProductCard.tsx';
import './HomeProducts.css';


const HomeProducts = () => {
  return (
    <div className='home1-products-container'>
      <div className='home1-products-content'>
        {products.map((product) => <div key={product.id} className='home1-products-card'>
          {product ? <ProductCard product={product} /> : null}
        </div>)}
      </div>
    </div>
  );
};

export default HomeProducts;