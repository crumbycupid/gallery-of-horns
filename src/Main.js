import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

  render() {
    
    let url ='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'

    return (
     <>
     <HornedBeast 
       imageURL={url}
       title="UniWhal"
       description="A unicorn and a narwhal nuzzling their horns"
     />
     </>
    );
  }
}

export default Main;