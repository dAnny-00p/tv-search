// import SearchBar from "../components/SearchBar";
import { useContext } from 'react'
import ShowsContext from '../context/ShowsContext'
import SearchBar from '../components/SearchBar'
import ListItem from '../components/ListItem'

const Home = () => {
  const showsContext = useContext(ShowsContext)
  const { loading, shows } = showsContext

  return (
    <div className='homepage'>
      <h1>Find your favourite shows to watch</h1>
      <SearchBar />
      {loading
        ? (
          <h2>Waiting</h2>
          )
        : (
          <div>
            {shows.map((item) => (
              <ListItem
                key={item.show.id}
                id={item.show.id}
                image={item.show.image
                  ? item.show.image.medium
                  : 'https://fontawesome.com/icons/image?f=classic&s=duotone'}
                name={item.show.name}
                rating={item.show.rating.average
                  ? item.show.rating.average
                  : ''}
              />
            ))}
          </div>
          )}
    </div>
  )
}
export default Home
