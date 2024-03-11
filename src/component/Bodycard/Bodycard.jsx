import Button from "../Button/Button";
import "./Bodycard.css"
function Bodycard(props) {
  return (
    <div className="Bodycard">
      <h2>{props.title} </h2>
      <p>{props.descrizione}</p>
      <div className="byncontainer">
          <Button classe={"dark"} testo={"info"}></Button>
          <Button classe={"success"} testo={"Send"}></Button>
        </div>
    </div>
  );
}
export default Bodycard;
