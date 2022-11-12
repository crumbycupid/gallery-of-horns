import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import './Main.css';
import { Form } from "react-bootstrap";

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
      <>
        <main>
          <Form id="form"></Form>
          <fieldset>
            <Form.Group className="beastHorn">
              <Form.Label id="labelForm" htmlFor="Select">Search by Number of Horns</Form.Label>
              <Form.Select id="Select" onChange={this.props.filter}>
                <option>Number of Horns</option>
                <option value={1}>1 Horn</option>
                <option value={2}>2 Horns</option>
                <option value={3}>3 Horns</option>
                <option value={100}>100 Horns</option>
              </Form.Select>
            </Form.Group>
          </fieldset>
          <div id="beast-display">
            {beastArr}
          </div>
        </main>
      </>
    )
  }
}

export default Main;
