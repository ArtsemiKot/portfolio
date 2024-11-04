import './App.css'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header'
import Preview from './components/Preview/Preview'
import About from './components/Skills/About'

function App() {

  return (
    <>
      <div className='main_img'>
        <div className='main_wrapper'>
          <Header></Header>
          <Preview></Preview>
          <About></About>
        </div>
      </div>
      <Experience></Experience>
    </>
  )
}

export default App
