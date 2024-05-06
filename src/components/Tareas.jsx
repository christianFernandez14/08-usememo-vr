import React, { useState } from 'react'


const Tareas = () => {

  const [tareas, setTareas] = useState([])


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