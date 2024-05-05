import React, { useEffect, useState } from "react"

const Empleados = React.memo(({ page }) => {

  const [empleadosState, setEmpleadosState] = useState([])


  useEffect(() => {
    console.log('Renderizado desde el componente de Empleados')
  }, [empleadosState])

  useEffect(() => {
    conseguirEmpleados(page)
  }, [page])


  const conseguirEmpleados = async page => {

    const URL = `https://reqres.in/api/users?page=${page}`
    const peticion = await fetch(URL)
    // traigo solo data y lo renombro a data por empleados
    const { data: empleados } = await peticion.json()

    setEmpleadosState(empleados)
    console.log('Se ejecuto la peticòn Ajax')
  }



  return (
    <div>
      <p>Mostrando la página: {page}</p>
      <ol className="empleados">
        {
          empleadosState.map(empleado => (
            <li
              key={empleado.id}
            >
              <img src={empleado.avatar} />
              <h2>{empleado.first_name} {empleado.last_name}</h2>
              <p>{empleado.email}</p>
            </li>
          ))
        }
      </ol>
    </div>
  )
})

export default Empleados