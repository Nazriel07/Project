import {Routes,Route} from 'react-router-dom'
import About from './page/about'
import Contact from './page/contact'
import Home from './page/home'
import Porto from './page/porto' 
import Service from './page/services'
import Layout from './page/layout'

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path ="/porto" element={<Porto />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/services" element={<Service />} />
      </Route>
    </Routes>
  )
}

export default App
