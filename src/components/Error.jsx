
// eslint-disable-next-line react/prop-types
const Error = ({mensaje}) => {
  return (
    <div className="bg-red-700 text-white font-bold text-center uppercase rounded-md p-3 mb-2">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error