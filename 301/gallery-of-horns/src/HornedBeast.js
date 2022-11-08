import React from "react";

class HornedBeast extends React.Component {
  render(){
    console.log(this.props);
    return(
      <article>
        <h2>{this.props.title}</h2>
        <img alt="Narwhal">{this.props.imgageURL}</img>
        <p>Description</p>
      </article>
    )
  }
}

export default HornedBeast;
