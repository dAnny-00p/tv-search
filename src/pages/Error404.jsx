import { useLocation } from 'react-router-dom'

const Error404 = () => {
  const location = useLocation()

  return (
    <>
      <div className='errorPage'>
        <i className='fa-regular fa-face-sad-tear' />
        <h1>Error 404</h1>
        <p>Página no encontrada: {location.pathname}</p>
      </div>

    </>

  )
}
export default Error404
