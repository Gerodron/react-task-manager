import '../styles/Tarea.css'
import {AiOutlineDelete} from 'react-icons/ai'
function Tarea({ id, texto, completada, completarTarea, eliminarTarea}){
    return(
        <div className={`tarea-contenedor ${completada? 'completada' : 'null'} `.trimEnd()}>
            <div className='tarea-texto' onClick={()=>completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea-icono' onClick={()=>eliminarTarea(id)}>
                 <AiOutlineDelete className='tarea-contenedor-iconos' />
            </div>
        </div>
    );
}

export default Tarea;