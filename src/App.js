import "./App.css";
import Button from "./component/Button/Button";
import ImageComponent from "./component/ImageComponent/ImageComponent";

function App() {
  return (
    <div className="container">
      <ImageComponent
        src={
          "https://images.unsplash.com/photo-1682685796852-aa311b46f50d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"img"}
      ></ImageComponent>
      <Button classe={"dark"} testo={"info"}></Button>
      <Button classe={"success"} testo={"Send"}></Button>
    </div>
  )
}

export default App;
