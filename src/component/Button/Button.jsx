import "./Button.css"
function Button (props){
    return(
        <button className={props.classe}>{props.testo}</button>
    )
}
export default Button