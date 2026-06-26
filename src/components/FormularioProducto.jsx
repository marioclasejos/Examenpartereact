import { useState } from 'react'

const API_URL = 'https://examenparteexpress.onrender.com'
const API_KEY = import.meta.env.VITE_API_KEY

function FormularioProducto() {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const producto = { nombre, precio }
    await fetch(`${API_URL}/api/productos`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto),
    })
    setNombre('')
    setPrecio('')
  }

  return (
    <div className="form-container">
      <h2>Añadir Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del producto"
            required
          />
        </label>
        <label>
          Precio (€)
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
            required
          />
        </label>
        <button type="submit">Añadir</button>
      </form>
    </div>
  )
}

export default FormularioProducto
