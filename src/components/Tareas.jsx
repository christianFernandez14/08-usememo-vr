import React, { useMemo, useState } from 'react'


const Tareas = () => {

  const [tareas, setTareas] = useState([])
  const [contador, setContador] = useState(500)


  const guardarTarea = e => {
    e.preventDefault()
    setTareas(tarea => [
      ...tarea,
      e.target.descripcion.value
    ])
  }

  const borrarTarea = id => {

    // Filtrar las tareas para borrar la que no quiero
    let nuevas_tareas = tareas.filter((tarea, indice) => indice !== id)

    // Guardar el nuevo Estado de tareas  
    setTareas(nuevas_tareas)

  }

  const sumarAlContador = () => {
    setContador(contador + 1)
  }

  const contadoresPasados = (acumulacion) => {

    // La idea de esto es que acá estar la logica que desee, peticiones a otro sitios, no importa lo pesadas que sean, ya que esto dependera del la declaracion que hicimos abajo con useMemo y que dependia esclusivamente de contador

    for (let i = 0; i <= acumulacion; i++) {

      console.log('Ejecutando acumulación de contadores del pasado...')
      console.log(`Se le sumó ${i} al contador con fecha 01-01-1991`)

    }

    return `Contador manual de tareas: ${acumulacion}`
  }


  const memoContadores = useMemo(() => (contadoresPasados(contador)), [contador])

  return (
    <div className='tareas-container'>
      <h1>Mis tareas: </h1>
      <form onSubmit={guardarTarea}>
        <input
          name='descripcion'
          type="text"
          placeholder='Nombre de la tarea'
        />
        <input
          type="submit"
          value='guardar'
        />
      </form>
      <hr />

      <h3>{memoContadores}</h3>
      <button onClick={sumarAlContador}>Sumar</button>

      <h3>Lista de tareas agregadas</h3>
      <ol>
        {
          tareas.map((tarea, indice) => (
            <li key={indice}>
              {tarea}
              <button onClick={() => borrarTarea(indice)}>x</button>
            </li>
          ))
        }
      </ol>

    </div>
  )
}

export default Tareas