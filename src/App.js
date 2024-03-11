import "./App.css";
import ImageComponent from "./component/ImageComponent/ImageComponent";
import Bodycard from "./component/Bodycard/Bodycard";
import Card from "./component/Card/Card";

function App() {
  return (
    <div className="container">
      <div className="card">
        <ImageComponent
          src={
            "https://images.unsplash.com/photo-1682685796852-aa311b46f50d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Desert"}
          alt={"img"}
        ></ImageComponent>
        <Bodycard title={"Deserto"} descrizione={"Ragazze deserto"}></Bodycard>
      </div>
      <div className="card">
        <ImageComponent
          src={
            "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Mountain"}
          alt={"img"}
        ></ImageComponent>
        <Bodycard title={"Montagna"} descrizione={"Bellissima montagna"}></Bodycard>
      </div>
      <Card descrizione={"Alba deserto"} title={"Alba"} src={"https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bW9udGFnbmF8ZW58MHx8MHx8fDA%3D"}></Card>
      <Card  descrizione={"Montagna Innevata"} title={"Alpi svizzere"} src={"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9udGFnbmF8ZW58MHx8MHx8fDA%3D"}></Card>
   
    </div>
  );
}

export default App;
