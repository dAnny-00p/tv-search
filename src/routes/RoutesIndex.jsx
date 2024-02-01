import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Info from '../pages/Info'
import Error404 from '../pages/Error404'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route exact path='/home' element={<Home />} />
      <Route path='/singleshow/:id' element={<Info />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}
export default RoutesIndex
