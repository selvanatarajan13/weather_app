import './App.css'
import AppContainer from './AppContainer'
import { DataProvider } from './context/WeatherDataContext'

function App() {

  return (
    <div className='app'>
      <DataProvider>
        <AppContainer />
      </DataProvider>
    </div>
  )
}

export default App
