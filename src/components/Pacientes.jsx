

const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email,fecha,sintomas,id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente")
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className="m-5 bg-white shadow-xl px-5 py-10 rounded-md">
          <p className="font-bold mb-3 text-sky-700 uppercase ">Nombre: {''} <span className="font-normal normal-case text-black">{nombre}</span></p>
          <p className="font-bold mb-3 text-sky-700 uppercase ">Propietario: {''} <span className="font-normal normal-case text-black">{propietario}</span></p>
          <p className="font-bold mb-3 text-sky-700 uppercase ">Email: {''} <span className="font-normal normal-case text-black">{email}</span></p>
          <p className="font-bold mb-3 text-sky-700 uppercase ">Email: {''} <span className="font-normal normal-case text-black">{fecha}</span></p>
          <p className="font-bold mb-3 text-sky-700 uppercase ">Síntomas: {''} <span className="font-normal normal-case text-black">{sintomas}</span></p>

          <div className="mt-5 flex justify-end">
            <button type="button" className="py-2 px-10 mr-4 bg-azulClaro-600 hover:bg-azulClaro-500 rounded-md text-white font-bold uppercase" onClick={() => setPaciente(paciente) }>Editar</button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-500 rounded-md text-white font-bold uppercase" onClick={handleEliminar}>Eliminar</button>


          </div>


    </div>
  )
}

export default Pacientes