import Box from './components/Box'
import User from './components/User'
import { UserContetProvider } from './components/UserContext'

const App = () => {
  return (
    <div className='App'>
      <UserContetProvider>
        <User />
      </UserContetProvider>
    </div>
  )
}

export default App
