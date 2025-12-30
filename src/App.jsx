import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import ResourceDetail from './pages/ResourceDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources/:resourceId" element={<ResourceDetail />} />
      </Route>
    </Routes>
  )
}

export default App
