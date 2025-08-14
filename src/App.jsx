
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import ServiceNew from './pages/ServiceNew';
import Service3 from './pages/Service3';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Router>
        
        <section className='header-section'>
          <Header/>
        </section>

        <section className='main-content-section'>
          <Routes>
            <Route path='/' element={<Service3 />} />
            <Route path='/service' element={<Service3 />} />     
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </section>

      </Router>
    </>
  )
}

export default App
