
import './App.css'
import Header from './components/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        
        <section className='header-section'>
          <Header/>
        </section>

      </Router>
    </>
  )
}

export default App
