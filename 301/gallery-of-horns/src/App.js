import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import HornedBeast from "./HornedBeast";


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <HornedBeast
            title="Narwhal"
            imageURL="https://img.ccnull.de/1020000/preview/1024404_8ee66cfa1955a96d649873f4f32c99a2.jpg"
            description=""
          />
          <HornedBeast
            title="Rhino"
            imageURL=""
            description=""
          />
          <HornedBeast
            title="Unicorn"
            imageURL=""
            description=""
          />
        </Main>
        <Footer />
      </>)
  }
}

export default App;
