
import './App.css'
import Header from './components/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Service from './pages/Service';

function App() {

  return (
    <>
      <Router>
        
        <section className='header-section'>
          <Header/>
        </section>

        <section className='main-content-section'>
          <Routes>
            <Route path='/pages/Service.jsx' element={<Service />} />     


          </Routes>
        </section>

      </Router>
    </>
  )
}

export default App
