import { Component } from "react";
import "./ImageComponent.css"

class ImageComponent extends Component {
  render() {
    return (
     
        <img src={this.props.src} alt={this.props.alt} srcset="" />
    
    );
  }
}
export default ImageComponent;
