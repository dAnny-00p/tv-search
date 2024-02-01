import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Details from '../pages/Details'
import Error404 from '../pages/Error404'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route exact path='/home' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}
export default RoutesIndex
