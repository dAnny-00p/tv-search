import React, { useState } from 'react'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const onSearchHandler = (e) => {
    e.preventDefault()
    console.log('search input: ' + searchTerm)
  }
  return (
    <div>SearchBar
      <form className='d-flex' role='search'>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Looking for something?'
          aria-label='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='btn btn-outline-warning' type='submit' onClick={onSearchHandler}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
