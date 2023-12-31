import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({pacientes, setPacientes ,paciente ,setPaciente}) => {

  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(()=> {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    //Validando formulario
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      console.log("Faltan campos por llenar")
      setError(true)
      return;
    }
    setError(false)
    
    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      
    }

    //Editando registro

    if(paciente.id){
      objPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      objPaciente.id = generarId()
      setPacientes([...pacientes,objPaciente]);
    }



    

    //Reiniciando formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h1 className="font-black text-3xl text-center text-azulClaro-950">Seguimiento Pacientes</h1>

        <p className="mt-5 text-center">
          Añade Pacientes y {''} <span className="text-azulClaro-500 font-bold">Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-md py-10 px-5 mt-10 mb-10">
          {error && (
           <Error mensaje="Rellena todos los campos"/>
          )}
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-black font-bold uppercase">Nombre Mascota</label>
            <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-black font-bold uppercase">Nombre Propietario</label>
            <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-black font-bold uppercase">Email</label>
            <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-black font-bold uppercase">Fecha de alta</label>
            <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-black font-bold uppercase">Síntomas</label>
            <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los síntomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
          </div>

          <input type="submit" className="bg-azulClaro-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-sky-600 cursor-pointer transition-all" value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"}/>

        </form>

    </div>
  )
}

export default Formulario