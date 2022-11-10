import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <p>{this.state.likes} likes</p>
        <img 
          src={this.props.image_url} 
          alt={this.props.description} 
          title={this.props.title}
        />
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
