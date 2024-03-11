import ImageComponent from "../ImageComponent/ImageComponent";
import Bodycard from "../Bodycard/Bodycard";
function Card(props) {
  return (
    <div className="card">
      <ImageComponent
        src={props.src}
        title={"Desert"}
        alt={"img"}
      ></ImageComponent>
      <Bodycard title={props.title} descrizione={props.descrizione}></Bodycard>
    </div>
  );
}
export default Card;
