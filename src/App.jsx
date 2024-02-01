import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/NavBar'
import RoutesIndex from './routes/RoutesIndex'
import './App.css'

function App () {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <RoutesIndex />
        </div>
      </Router>
    </>
  )
}

export default App
