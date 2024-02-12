import { useState } from "react";
import "../styles/Formulario.css";
import { v4 as uuidv4 } from "uuid";

function Formulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    // preventDefault() perimite que no se vuelva a cargar toda la app
    //cuando enviemos el formulario
    e.preventDefault();
    console.log("Enviando formulario...");
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completado: false,
    };
    props.agregarTarea(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton" type="submit">
        Agregar Tarea
      </button>
    </form>
  );
}

export default Formulario;
