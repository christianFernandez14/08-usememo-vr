import React from "react"

const Empleados = React.memo(() => {

  console.log('Renderizado desde el componente de Empleados')

  return (
    <div>Empleados</div>
  )
})

export default Empleados