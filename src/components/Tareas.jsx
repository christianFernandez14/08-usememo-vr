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
          tareas.map(tarea => (
            <li key={tarea}>
              {tarea}
            </li>
          ))
        }
      </ol>

    </div>
  )
}

export default Tareas