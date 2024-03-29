import './App.css'
import ListaDeTareas from './components/ListaDeTareas'
import LogoFreeCodeCamp from './components/Logo-FreeCodeCamp'

function App() {

  return (
    <div className='aplicacion-tareas'>
      <LogoFreeCodeCamp />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
