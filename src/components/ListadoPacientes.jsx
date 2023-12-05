import Pacientes from "./Pacientes"
import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
const ListadoPacientes = ({pacientes, setPaciente , eliminarPaciente}) => {

  useEffect(()=> {
    if(pacientes.length > 0){
      console.log("Nuevo paciente")
    }
  },[pacientes])
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
         
          
          
          
        {pacientes && pacientes.length ? (
          <>

            <h2 className="font-black text-center text-3xl text-azulClaro-950">Listado de pacientes</h2>
            <p className="mt-5 mb-10 text-center">
              Administra tus <span className="text-azulClaro-500 font-bold">Pacientes y citas</span>
            </p>
            <div className=" md:h-screen md:overflow-y-scroll">
              {pacientes.map((paciente) => {
                return(
                  <Pacientes key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
                )
              })}
            </div>



          </>



        ) : (
          <>
            <h2 className="font-black text-center text-3xl text-azulClaro-950">No hay pacientes</h2>
            <p className="mt-5 mb-10 text-center">
              Comienza agregando <span className="text-azulClaro-500 font-bold">Pacientes y citas</span>
            </p>
          
          </>

        )}
        
          
          
        
        



    </div>
  )
}

export default ListadoPacientes