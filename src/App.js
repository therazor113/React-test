import Layout from './components/core/Layout'
import Home from './pages/Home'
import Page from './pages/Page'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page' element={<Page />} />
      </Routes>
    </Layout>
  )
}

export default App
