import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Hero from '../src/components/Hero'
import ServicePage from './pages/ServicePage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Hero />}/>
            <Route path='/services' element={<ServicePage />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
