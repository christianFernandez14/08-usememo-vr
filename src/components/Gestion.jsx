import { useEffect, useState } from "react"
import Empleados from "./Empleados"

const Gestion = () => {

  const [nombre, setNombre] = useState('')

  const asignarGestor = e => {
    setNombre(e.target.value)
  }

  console.log('Renderizado desde el componente de Gestion')

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
      <Empleados />
    </div>
  )
}

export default Gestion