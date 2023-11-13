
const Input = (props) =>{
    return (
        <>
        <label className="m-1" htmlFor={props.id}>{props.label}</label>
        <input className="m-1" type={props.type} value={props.value} onChange={props.onChange}
         id={props.id} name={props.id}/>
        </>
    )
}
export default Input;