import { RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './pages'
import router from './router'
function App() {


  return (
   <RouterProvider router={router}/>
  )
}

export default App
