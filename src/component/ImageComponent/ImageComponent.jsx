import { Component } from "react";
import "./ImageComponent.css"

class ImageComponent extends Component {
  render() {
    return (
      <>
        <h2>Welcome to my app-react</h2>
        <img src={this.props.src} alt={this.props.alt} srcset="" />
      </>
    );
  }
}
export default ImageComponent;
