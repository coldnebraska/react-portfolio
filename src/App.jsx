import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
