
const InputErrorMessage = ({msg})=>{
     return msg ? <span className="d-block text-red-700 font-semibold text-sm">{msg}</span> : null
}
export default InputErrorMessage