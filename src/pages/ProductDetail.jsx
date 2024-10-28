import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {

  const { id } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    fetch('/src/assets/productos.json')
      .then(response => response.json())
      .then(data => {
        const prod = data.find(item => item.id === parseInt(id))
        setProducto(prod)
      })
  }, [id])

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <button>Comprar</button>
    </div>
  )
}