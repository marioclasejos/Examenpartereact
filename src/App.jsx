import ListaProducto from './components/ListaProducto'
import FormularioProducto from './components/FormularioProducto'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Gestión de Productos</h1>
      <div className="contenido">
        <FormularioProducto />
        <ListaProducto />
      </div>
    </div>
  )
}


export default App
