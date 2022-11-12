import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';
import data from "./data.json"
import SelectedBeast from "./SelectedBeast";


class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      beasts: data,
      showModal: false,
      selectedBeast: null
  };
}

handleFilter = (event) =>{

if (event.target.value !=='Number of Horns') {
  let newData = data.filter(beast => beast.horns === parseInt(event.target.value));
  this.setState({beasts:newData});
} else {
  this.setState({beasts:data});
}

}
 
handleCloseModal = () => {
  this.setState({
    showModal: false,
  });
};

handleOpenModal = (beast) => {
  this.setState({
    showModal: true,
    selectedBeast: beast
  });
};

  render() {
    return (
        <>
        {
          this.state.selectedBeast &&
          <SelectedBeast
            showModal={this.state.showModal}
            handleCloseModal={this.handleCloseModal}
            selectedBeast={this.state.selectedBeast}/>
        }
          <Header />
          <Main 
            filter={this.handleFilter}
            beasts={this.state.beasts}
            handleOpenModal={this.handleOpenModal}
          />
          <Footer />
        </>
    );
  }
}

export default App;
