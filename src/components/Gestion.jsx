import { useCallback, useEffect, useState } from "react"
import Empleados from "./Empleados"

const Gestion = () => {

  const [nombre, setNombre] = useState('')
  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    console.log('Renderizado desde el componente de Gestion')
  }, [nombre, pagina])

  const asignarGestor = e => {
    setNombre(e.target.value)
  }

  const mostrarMensaje = useCallback(() => {
    console.log('Hola que tal, soy un mensaje desde el componente Gestión')
  }, [pagina])

  return (
    <div>
      <h1>Nombre del gestor: {nombre}</h1>
      <input
        type="text"
        onChange={asignarGestor}
        placeholder="Introduzca el nombre del gestor de usuarios"
      />

      <h2>Listado de empleados:</h2>
      <p>Los usuarios son gestionados por: {nombre}, vienes de jsonplaceholder...</p>
      <button onClick={() => { setPagina(1) }}>Página 1</button>
      <button onClick={() => { setPagina(2) }}>Página 2</button>
      <Empleados
        page={pagina}
        mensaje={mostrarMensaje}
      />
    </div>
  )
}

export default Gestion