import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";

class Main extends React.Component {
  render() {


    let beastArr = data.map((beast, idx) => (

      <HornedBeast
        _id={beast._id}
        image_url={beast.image_url}
        title={beast.title}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
        key={idx}
      />
    ))
    return (
      <main>
        {beastArr}
      </main>
    )
  }
}

export default Main;
