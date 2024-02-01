import React, { useContext, useEffect } from 'react'
import showsContext from '../context/showsContext'

// import Episodes from '..pages/Edisodes'
// import Cast from '..pages/Cast'

const Info = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(showsContext)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results)
        getSingleShow(results)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const removeTags = (text) => {
    if (text === null || text === '') {
      return false
    } else {
      text = text.toString()
    }
  }

  return (
    <>
      <div><h1>Detailed Information</h1></div>
      <div className='informacion'>
        aaaaa
      </div>
      {loading
        ? (
          <h4>loading...</h4>
          )
        : (
          <div className='singleshow'>
            <img
              src={
              singleShow.image
                ? singleShow.image.medium
                : 'https://fontawesome.com/icons/image?f=classic&s=duotone'
            }
              alt={singleShow.name}
            />
            <div className='singleshow__info'>
              <h1>{singleShow.name}</h1>
              <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
            </div>
          </div>
          )}
    </>
  )
}

export default Info
