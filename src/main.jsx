import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './index.css'

// para algo de los context
import ShowsState from './context/showsState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShowsState>
    <App />
  </ShowsState>
)
