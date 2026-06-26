import { useEffect, useState } from 'react'

const API_URL = 'https://examenparteexpress.onrender.com'

function ListaProducto() {
  const [productos, setProductos] = useState([])

  const cargar = async () => {
    const res = await fetch(`${API_URL}/api/productos`)
    const data = await res.json()
    setProductos(data)
  }

  useEffect(() => {
    cargar()
  }, [])

  return (
    <div className="lista-container">
      <h2>Lista de Productos</h2>
      <button onClick={cargar}>Recargar</button>
      <ul>
        {productos.map((p, i) => (
          <li key={p.id ?? i}>
            <span className="nombre">{p.nombre}</span>
            <span className="precio">{p.precio} €</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaProducto
