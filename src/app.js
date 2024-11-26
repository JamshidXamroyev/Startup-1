import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Dastavka, About, FilterTaxi, Footer, Home, Comment, Logistika, SingleTaxi, Contact, Navbar, Taxi} from './component'

const App = () => {
  return (
     <div className=' overflow-x-hidden'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/comment' element={<Comment/>}/>
            <Route path='/uzun/taxi/:type' element={<FilterTaxi/>}/>
            <Route path='/uzun/taxi/:type/:id' element={<SingleTaxi/>}/>
            <Route path='/uzun/taxi' element={<Taxi />}/>
            <Route path='/uzun/dastavka' element={<Dastavka />}/>
            <Route path='/uzun/logistika' element={<Logistika />}/>
          </Routes>
          <Footer /> 
        </BrowserRouter>
     </div>
  )
}

export default App