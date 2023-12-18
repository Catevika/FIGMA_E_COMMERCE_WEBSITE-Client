import { ChangeEvent, MouseEventHandler, useState } from 'react';
import searchicon from '../../assets/icons/search-icon.svg';
import './Searchbar.css';

type Props = {
  isSearchOpen: boolean,
  toggleSearchBar: MouseEventHandler;
};

const Searchbar = ({ isSearchOpen, toggleSearchBar }: Props) => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      {isSearchOpen ?
        <p className='nav-search'>
          <img src={searchicon} alt='Search icon' className='nav-icon' onClick={toggleSearchBar} />
          <input type='text' placeholder='Search' autoFocus value={searchTerm} onChange={handleChange} name='Search' />
        </p>
        : <img src={searchicon} alt='Search icon' className='nav-icon' onClick={toggleSearchBar} />}
    </>
  );
};

export default Searchbar;