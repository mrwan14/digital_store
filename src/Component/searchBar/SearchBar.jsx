import React from 'react'
import './searchbar.css'

export default function SearchBar() {
  return (
    <React.Fragment>
        <div className="searchbar">
          <label htmlFor="search"></label>
          <input type="text"  name='search'/>
            
        </div>

    </React.Fragment>
  )
}
