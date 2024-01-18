import { NavLink } from 'react-router-dom';
import './ShopCategoriesNavbar.css';

const ShopCategoriesNavbar = () => {
  return (
    <nav className='shop1-categories-content'>
      <NavLink to='/shop/0' className={({ isActive }) => isActive ? 'text-1 active' : 'text-1'}>All rooms</NavLink>
      <NavLink to='/shop/1' className={({ isActive }) => isActive ? 'text-1 active' : 'text-1'}>Living Room</NavLink>
      <NavLink to='/shop/2' className={({ isActive }) => isActive ? 'text-1 active' : 'text-1'}>Bedroom</NavLink>
      <NavLink to='/shop/3' className={({ isActive }) => isActive ? 'text-1 active' : 'text-1'}>Bathroom</NavLink>
      <NavLink to='/shop/4' className={({ isActive }) => isActive ? 'text-1 active' : 'text-1'}>Dining</NavLink>
      <NavLink to='/shop/5' className={({ isActive }) => isActive ? 'text-1 active' : 'text-1'}>Outdoor</NavLink>
      <NavLink to='/shop/6' className={({ isActive }) => isActive ? 'text-1 active' : 'text-1'}>Other category</NavLink>
      <NavLink to='/shop/7' className={({ isActive }) => isActive ? 'text-1 active' : 'text-1'}>Other category</NavLink>
      <NavLink to='/shop/8' className={({ isActive }) => isActive ? 'text-1 active' : 'text-1'}>Other category</NavLink>
    </nav>
  );
};

export default ShopCategoriesNavbar;