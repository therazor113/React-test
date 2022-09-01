import AppComponent from '../components/pageRefs/AppComponent'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <AppComponent />
    <Link to='/page'>Page</Link>
    </div>
  )
}

export default Home
