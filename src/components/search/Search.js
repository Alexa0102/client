import { BiSearch,BiXCircle} from 'react-icons/bi'

import React, { useState } from 'react';
import classes from './SearchStyles.module.css'


function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={classes.searchContainer}>
      {!isSearchOpen ? <button className={classes.icon} onClick={toggleSearch}><BiSearch size={25} /></button> : ""}
      {isSearchOpen && (
        <div className={classes.searchBar}>
          <input type="text" placeholder="Search..." />
          <div className={classes.closeIcon}>
            <BiXCircle color="white" onClick={toggleSearch}/>
          </div>
          <div className={classes.searchIcon}>
            <BiSearch color="white" size={20} />
          </div>
         
        </div>
      )}
    </div>
  );
}

export default SearchBar;
