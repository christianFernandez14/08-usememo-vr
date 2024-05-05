import Gestion from "./components/Gestion"
import Tareas from "./components/Tareas"

const App = () => {

  return (
    <div>
      {/* Ejercicios con el hook useMemo */}
      <Tareas />

      {/* Ejercicio con metodo memo para componentes */}
      {/* <Gestion /> */}
    </div>
  )
}

export default App
