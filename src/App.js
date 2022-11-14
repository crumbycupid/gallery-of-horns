import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      beasts: data,
      showModal: false,
      selectedBeast: null
  };
}

handleFilter = (event) =>{

  event.preventDefault();
  console.log(event.target.value);
   let horns = event.target.value;
   if (horns === '1') {
   let newData =  data.filter(beast => beast.horns === 1)
   this.setState({beasts: newData});
   } else if(horns === '2') {
   let newData = data.filter(beast => beast.horns === 2) 
   this.setState({beasts: newData });
   } else if(horns === '3') {
   let newData = data.filter(beast => beast.horns === 3) 
   this.setState({beasts: newData});
   } else if(horns === "100") {
   let newData = data.filter(beast => beast.horns === 100)
   this.setState({beasts: newData});
   } else {
    this.setState({beasts: data});
   }
//if (event.target.value !=='Number of Horns') {
//  let newData = data.filter(beast => beast.horns === parseInt(event.target.value));
//  this.setState({beasts:newData});
//} else {
// this.setState({beasts:data});
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
