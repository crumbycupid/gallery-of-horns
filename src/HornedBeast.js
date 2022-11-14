import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      clicks: 0
    };
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  handleClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }


  render() {
    return (
      <>
        <Card className="hornedBeast">
          <Card.Body>
            <Card.Header as="h2"
              id={this.props._id}
              keyword={this.props.keyword}
              >
              {this.props.title}
            </Card.Header>
            <div className="imgCardText">
              <img
                className='beastMainImage'
                src={this.props.image_url}
                alt={this.props.description}
                onClick={this.props.handleOpenModal}
              />
              <Card.Text>
                {this.props.description}
              </Card.Text>
              </div>
              <div className="likesDiv">
                <Button className='likesBtn' id='likeButton' onClick={(this.handleLikes)}>Like</Button>
              <Card.Text id='likeCount'>Likes{this.state.likes}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
