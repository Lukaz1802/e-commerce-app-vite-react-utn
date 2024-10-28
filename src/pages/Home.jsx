import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('/src/assets/productos.json')
          .then(response => response.json())
          .then(data => setProductos(data))
      }, [])

  return (
     <div>
    <h1>Productos</h1>
    <ul>
      {productos.map(producto => (
        <li key={producto.id}>
          <Link to={`/product/${producto.id}`}>
            {producto.nombre} - ${producto.precio}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
