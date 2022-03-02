import React from 'react'
import Homescreen from "./MOVIE/Homescreen"
import Detailedpage from './MOVIE/Detailedpage'
import { BrowserRouter as Router , Route, Routes  } from 'react-router-dom'

const App = () => {
  return (
   <Router>
   <Routes>

     <Route path='/' element={<Homescreen/>}/>
     <Route path='/detail/:id' element={<Detailedpage/>}/>
   </Routes>
   </Router>
  )
}

export default App