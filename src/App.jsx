

import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import About from './pages/About'
import AppLayout from './components/layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/layout/CountryDetails'

function App() {
  

  return (
   <>
   <div>
    <Routes>
      <Route path='/' element = {<AppLayout />}  > 
        <Route index element = {<Home />} />
        <Route path='contact' element = {<Contact />} />
        <Route path='country' element = {<Country />} />
        <Route path='about' element = {<About />} />
        <Route path='country/:id' element = {<CountryDetails />}  />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    
    </Routes>
 
   </div>
   </>
  )
}

export default App
