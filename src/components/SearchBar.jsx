import { useState, useContext } from 'react'

import ShowsContext from '../context/showsContext'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const showsContext = useContext(ShowsContext)
  const { searchShows } = showsContext

  const onSearchHandler = (e) => {
    e.preventDefault()

    if (searchTerm === '') {
      console.log('busqueda no valida')
    } else {
      searchShows(searchTerm)
    }
  }

  return (
    <>
      <i className='fa-solid fa-face-grin-hearts' />
      <div>
        <form className='d-flex' role='search'>
          <input
            className='form-control me-2'
            type='text'
            placeholder='Looking for something?'
            aria-label='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='btn btn-outline-warning' type='submit' onClick={onSearchHandler}>
            Search
          </button>
        </form>
      </div>
    </>
  )
}

export default SearchBar
