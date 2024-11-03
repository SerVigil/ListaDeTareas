import React, { useState } from "react";

function ListaDeTareas() {

    const [tareas, setTareas] = useState([
        { texto: "Desayunar", completada: false },
        { texto: "Hacer la cama", completada: false },
        { texto: "Darme una ducha", completada: false },
        { texto: "Hacer ejercicio", completada: false },
      ]);

  // Marcar una tarea como completada o incompleta
  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleCompletada(index)}
            />
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;
