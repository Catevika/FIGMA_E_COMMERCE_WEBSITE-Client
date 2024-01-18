import chevronDownIcon from '../../assets/icons/chevron-down.svg';
import filterIcon from '../../assets/icons/filter-icon.svg';
import grid2colsIcon from '../../assets/icons/grid-2cols-icon.svg';
import grid2rowsIcon from '../../assets/icons/grid-2rows-icon.svg';
import grid2Icon from '../../assets/icons/grid-2x2-icon.svg';
import grid3Icon from '../../assets/icons/grid-3x3-icon.svg';
import HomeCollection from '../../components/HomeCollection/HomeCollection';
import ShopCategoriesNavbar from '../../components/Navigation/ShopCategoriesNavbar/ShopCategoriesNavbar';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import { shop1Products } from '../../data';
import './Shop1.css';

const Shop1 = () => {
  return (
    <section className='section-content'>
      <div className='shop1-hero-container'>
        <div className='shop1-hero-text-container'>
          <h2 className='shop1-hero-title'>Shop</h2>
          <p className='text-2-link'>Let's design the place you always imagined.</p>
        </div>
      </div>
      <div className='shop1-middle'>
        <aside>
          <div className='shop1-filter-title'>
            <p className='text-3'>
              <img src={filterIcon} alt='Filter icon' className='shop1-filter-icon' />
              <span className='text-3'>Filter</span>
            </p>
          </div>
          <div className='shop-1-categories-container'>
            <p className='text-2-link'>Categories</p>
            <ShopCategoriesNavbar />
          </div>
          <div className="shop1-price-range-container">
            <p className='text-2-link'>Price</p>
            <div className='shop1-price-range-content'>
              <div className='checkbox text-1'>
                <label htmlFor="all-prices">All-prices</label>
                <input type="checkbox" id="all-prices" name="all-prices" defaultChecked />
              </div>
              <div className='checkbox text-1'>
                <label htmlFor="zero-hundred">$0.00 - 99.99</label>
                <input type="checkbox" id="zero-hundred" name="zero-hundred" />
              </div>
              <div className='checkbox text-1'>
                <label htmlFor="hundred-two-hundred">$100.00 - 199.99</label>
                <input type="checkbox" id="hundred-two-hundred" name="hundred-two-hundred" />
              </div>
              <div className='checkbox text-1'>
                <label htmlFor="two-hundred-three-hundred">$200.00 - 299.99</label>
                <input type="checkbox" id="two-hundred-three-hundred" name="two-hundred-three-hundred" />
              </div>
              <div className='checkbox text-1'>
                <label htmlFor="three-hundred-four-hundred">$300.00 - 399.99</label>
                <input type="checkbox" id="three-hundred-four-hundred" name="three-hundred-four-hundred" />
              </div>
              <div className='checkbox text-1'>
                <label htmlFor="four-hundred-more">$400.00+</label>
                <input type="checkbox" id="four-hundred-more" name="four-hundred-more" />
              </div>
            </div>
          </div>
        </aside>
        <div className='shop1-products-container'>
          <div className='shop1-products-content'>
            <div className='shop1-products-content-top'>
              <p className='text-2-link'>Living Room</p>
              <div className='text-2-link shop1-products-sort'>Sort by
                <img src={chevronDownIcon} alt="Chevron down icon" />
                <div className='shop1-products-display-container'>
                  <img src={grid3Icon} alt="Large Grid icon" className='shop1-products-display' />
                  <img src={grid2Icon} alt="Medium Grid icon" className='shop1-products-display' />
                  <img src={grid2colsIcon} alt="2 cols Grid icon" className='shop1-products-display' />
                  <img src={grid2rowsIcon} alt="2 rows Grid icon" className='shop1-products-display' />
                </div>
              </div>
            </div>
            <div className='shop1-products-content-middle'>
              <HomeCollection products={shop1Products} />
            </div>
            <button className='shop1-btn btn-small'>Show More</button>
          </div>
        </div>
      </div>
      <div className='home1-newsletter-container'>
        <NewsLetter />
      </div>
    </section >

  );
};

export default Shop1;