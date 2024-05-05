import React from 'react'


const Tareas = () => {
  return (
    <div className='tareas-container'>
      <h1>Mis tareas: </h1>
      <form >
        <input
          name='tarea'
          type="text"
          placeholder='Nombre de la tarea'
        />
        <input type="submit" value='guardar' />
      </form>
    </div>
  )
}

export default Tareas